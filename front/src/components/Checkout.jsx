import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserService from "../Services/Prodservice";
import "bootstrap/dist/css/bootstrap.min.css";

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [isPlacing, setIsPlacing] = useState(false);
  const [success, setSuccess] = useState(false);

  // Multi-step state
  const [step, setStep] = useState(1); // 1: address/contact, 2: payment, 3: review/success

  // Contact + address
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [address, setAddress] = useState("");

  // Payment
  const [paymentMethod, setPaymentMethod] = useState("");
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvv, setCardCvv] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    if (location.state) {
      const incoming = location.state;
      setOrder(incoming);
      setContactName(incoming?.contact?.name || JSON.parse(user)?.Name || "");
      setContactPhone(incoming?.contact?.phone || "");
      setAddress(incoming?.address || "");
      setPaymentMethod(incoming?.paymentMethod || "");
    } else {
      const saved = localStorage.getItem("checkoutProduct");
      if (saved) {
        const product = JSON.parse(saved);
        const parsedUser = JSON.parse(user);
        const newOrder = {
          user: parsedUser,
          cart: [product],
          address: "",
          paymentMethod: "",
          finalAmount: parseFloat(product?.price) || 0,
        };
        setOrder(newOrder);
        setContactName(parsedUser?.Name || "");
      }
    }
  }, [location.state, navigate]);

  const validateStep1 = () => {
    if (!contactName.trim()) return "Please enter your name";
    if (!/^\+?\d{10,15}$/.test(contactPhone)) return "Please enter a valid phone";
    if (!address.trim()) return "Please enter delivery address";
    return "";
  };

  const goToPayment = (e) => {
    e.preventDefault();
    const err = validateStep1();
    if (err) {
      alert(err);
      return;
    }
    setStep(2);
  };

  const handleConfirm = async () => {
    if (paymentMethod === "UPI" && !/^\w+[\.@]?\w+@\w+$/.test(upiId)) {
      alert("Enter a valid UPI ID (e.g., name@bank)");
      return;
    }
    if (paymentMethod === "Card") {
      if (!/^\d{16}$/.test(cardNumber.replace(/\s/g, ""))) {
        alert("Enter 16-digit card number");
        return;
      }
      if (!cardName.trim()) {
        alert("Enter name on card");
        return;
      }
      if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(cardExpiry)) {
        alert("Enter expiry as MM/YY");
        return;
      }
      if (!/^\d{3}$/.test(cardCvv)) {
        alert("Enter 3-digit CVV");
        return;
      }
    }

    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }

    setIsPlacing(true);
    try {
      const currentUser = order.user || JSON.parse(localStorage.getItem("user"));
      const userId = currentUser?.id || currentUser?.user_id;
      const addressToUse = address || order.address;
      const email = currentUser?.Email || currentUser?.email;

      if (!userId) throw new Error("Missing user id");
      if (!addressToUse) throw new Error("Missing address");

      // Place an order per item
      const requests = (order.cart || []).map((item) => {
        const productId = item?.id || item?.product_id;
        return UserService.placeOrder({
          user_id: userId,
          product_id: productId,
          address: addressToUse,
          payment_method: paymentMethod,
          email,
        });
      });
      await Promise.all(requests);

      setSuccess(true);
    } catch (err) {
      console.error("Place order failed", err);
      alert("Failed to place order. Please try again.");
    } finally {
      setIsPlacing(false);
      localStorage.removeItem("checkoutProduct");
    }
  };

  if (!order) {
    return (
      <div className="container my-5">
        <div className="alert alert-info">No checkout data found. Redirecting to cart...</div>
      </div>
    );
  }

  const totalAmount = (order.finalAmount || 0).toFixed(2);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-lg p-4">
            <h2 className="mb-4 text-primary">Complete Payment</h2>

            {/* Stepper */}
            <div className="d-flex gap-3 mb-4">
              <span className={`badge ${step >= 1 ? "bg-primary" : "bg-secondary"}`}>1</span>
              <span>Address</span>
              <span className={`badge ${step >= 2 ? "bg-primary" : "bg-secondary"} ms-4`}>2</span>
              <span>Payment</span>
            </div>

            <div className="row">
              {/* Left: Method list / Address form */}
              <div className="col-md-6">
                {step === 1 && (
                  <form onSubmit={goToPayment}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input className="form-control" value={contactName} onChange={(e) => setContactName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Contact Number</label>
                      <input className="form-control" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} placeholder="e.g. 9876543210" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Delivery Address</label>
                      <textarea className="form-control" rows="4" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <button className="btn btn-primary w-100" type="submit">Continue to Payment</button>
                  </form>
                )}

                {step === 2 && (
                  <div className="list-group">
                    <label className="list-group-item">
                      <input className="form-check-input me-2" type="radio" name="pay" value="UPI" checked={paymentMethod === "UPI"} onChange={(e) => setPaymentMethod(e.target.value)} />
                      UPI
                    </label>
                    <label className="list-group-item">
                      <input className="form-check-input me-2" type="radio" name="pay" value="Card" checked={paymentMethod === "Card"} onChange={(e) => setPaymentMethod(e.target.value)} />
                      Credit / Debit Card
                    </label>
                    <label className="list-group-item">
                      <input className="form-check-input me-2" type="radio" name="pay" value="Cash on Delivery" checked={paymentMethod === "Cash on Delivery"} onChange={(e) => setPaymentMethod(e.target.value)} />
                      Cash on Delivery
                    </label>
                  </div>
                )}
              </div>

              {/* Right: Dynamic details / Items & Summary */}
              <div className="col-md-6">
                {/* Items */}
                <div className="mb-3">
                  <h6>Order Summary</h6>
                  {order.cart?.map((item, idx) => (
                    <div key={idx} className="d-flex align-items-center border rounded p-2 mb-2">
                      <img src={item.image_url} alt={item.Name} style={{ width: "48px", height: "48px", objectFit: "cover" }} />
                      <div className="ms-2 flex-grow-1">
                        <div className="small">{item.Name}</div>
                        <div className="text-muted small">₹{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Payment details panel */}
                {step === 2 && (
                  <div className="border rounded p-3 mb-3">
                    {paymentMethod === "UPI" && (
                      <div>
                        <label className="form-label">Enter UPI ID</label>
                        <input className="form-control mb-2" placeholder="name@bank" value={upiId} onChange={(e) => setUpiId(e.target.value)} />
                        <button className="btn btn-warning w-100" onClick={handleConfirm} disabled={isPlacing}>
                          {isPlacing ? "Processing..." : `Pay ₹${totalAmount}`}
                        </button>
                      </div>
                    )}

                    {paymentMethod === "Card" && (
                      <div>
                        <label className="form-label">Card Number</label>
                        <input className="form-control mb-2" maxLength={19} placeholder="1234 5678 9012 3456" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                        <label className="form-label">Name on Card</label>
                        <input className="form-control mb-2" value={cardName} onChange={(e) => setCardName(e.target.value)} />
                        <div className="d-flex gap-2">
                          <input className="form-control mb-2" placeholder="MM/YY" value={cardExpiry} onChange={(e) => setCardExpiry(e.target.value)} />
                          <input className="form-control mb-2" placeholder="CVV" value={cardCvv} onChange={(e) => setCardCvv(e.target.value)} />
                        </div>
                        <button className="btn btn-warning w-100" onClick={handleConfirm} disabled={isPlacing}>
                          {isPlacing ? "Processing..." : `Pay ₹${totalAmount}`}
                        </button>
                      </div>
                    )}

                    {paymentMethod === "Cash on Delivery" && (
                      <div>
                        <div className="alert alert-info mb-2">Pay in cash upon delivery.</div>
                        <button className="btn btn-primary w-100" onClick={handleConfirm} disabled={isPlacing}>
                          {isPlacing ? "Placing..." : "Confirm COD Order"}
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Summary */}
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-muted">Total Amount</div>
                  <div className="fw-bold">₹{totalAmount}</div>
                </div>
              </div>
            </div>

            {/* Success panel */}
            {success && (
              <div className="text-center mt-4">
                <div className="alert alert-success">
                  Order placed successfully{paymentMethod !== "Cash on Delivery" ? " (payment received)" : " (COD)"}!
                </div>
                <button className="btn btn-outline-success me-2" onClick={() => navigate("/")}>Continue Shopping</button>
                <button className="btn btn-success" onClick={() => navigate("/userdash")}>View Orders</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
