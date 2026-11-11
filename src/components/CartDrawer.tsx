import React, { useState } from 'react';
import { CartItem } from '../types';
import { 
  X, 
  Trash2, 
  ShoppingBag, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Truck, 
  FileCheck2,
  Lock,
  Phone,
  MessageSquare
} from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onOpenPrescriptionWorkflow: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onOpenPrescriptionWorkflow
}) => {
  if (!isOpen) return null;

  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerCity, setCustomerCity] = useState('Lahore');
  const [paymentMethod, setPaymentMethod] = useState<'COD' | 'BankTransfer'>('COD');
  const [discreetPackaging, setDiscreetPackaging] = useState(true);
  const [confirmedOrderNumber, setConfirmedOrderNumber] = useState<string>('');

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const deliveryFee = subtotal >= 3000 ? 0 : 250;
  const total = subtotal + deliveryFee;

  const hasPrescriptionItem = items.some(item => item.product.prescriptionRequired);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const orderNum = `HLM-${Math.floor(100000 + Math.random() * 900000)}`;
    setConfirmedOrderNumber(orderNum);
    setCheckoutStep('success');
    onClearCart();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-[#F5F9FA]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#20B9D2]" />
            <h3 className="text-base font-bold text-[#243746]">
              {checkoutStep === 'cart' && `Your Medicine Bag (${items.reduce((acc, i) => acc + i.quantity, 0)})`}
              {checkoutStep === 'checkout' && 'Discreet Checkout & Verification'}
              {checkoutStep === 'success' && 'Order Confirmed'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* STEP 1: CART ITEMS */}
        {checkoutStep === 'cart' && (
          <>
            <div className="p-4 sm:p-5 overflow-y-auto flex-grow space-y-4">
              {/* Prescription Warning if applicable */}
              {hasPrescriptionItem && (
                <div className="p-3.5 rounded-2xl bg-[#FEF2F2] border border-[#FCA5A5] text-xs text-[#991B1B] flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold">Prescription Item in Bag:</p>
                    <p className="mt-0.5 text-xs text-[#7f1d1d]">
                      Your bag contains a prescription medication. Our pharmacist will verify your prescription prior to shipment dispatch.
                    </p>
                    <button
                      type="button"
                      onClick={onOpenPrescriptionWorkflow}
                      className="mt-1.5 text-xs font-bold underline text-[#991B1B] flex items-center gap-1"
                    >
                      <FileCheck2 className="w-3.5 h-3.5" />
                      <span>Upload Prescription Now</span>
                    </button>
                  </div>
                </div>
              )}

              {items.length === 0 ? (
                <div className="text-center py-16">
                  <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-sm font-bold text-[#243746]">Your medicine bag is empty</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Explore our specialized medicines for women's and men's health.
                  </p>
                  <button
                    onClick={onClose}
                    className="mt-5 px-5 py-2.5 bg-[#20B9D2] text-white text-xs font-bold rounded-xl"
                  >
                    Browse Medicines
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map(({ product, quantity }) => (
                    <div 
                      key={product.id}
                      className="p-3 rounded-2xl border border-gray-100 bg-[#F5F9FA] flex items-center justify-between gap-3"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 rounded-xl object-cover bg-white shrink-0 border border-gray-200"
                        referrerPolicy="no-referrer"
                      />

                      <div className="flex-grow min-w-0">
                        <p className="text-xs font-bold text-[#243746] truncate">
                          {product.name}
                        </p>
                        <p className="text-[11px] text-gray-500 font-mono">
                          {product.currency} {product.price.toLocaleString()}
                        </p>
                        {product.prescriptionRequired && (
                          <span className="text-[9px] font-bold text-red-600 bg-red-50 px-1.5 py-0.5 rounded">
                            Rx Required
                          </span>
                        )}

                        <div className="mt-2 flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(product.id, Math.max(1, quantity - 1))}
                            className="w-5 h-5 rounded bg-white border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-600"
                          >
                            -
                          </button>
                          <span className="text-xs font-bold font-mono text-[#243746]">
                            {quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                            className="w-5 h-5 rounded bg-white border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-600"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <p className="text-xs font-mono font-bold text-[#243746]">
                          {product.currency} {(product.price * quantity).toLocaleString()}
                        </p>
                        <button
                          type="button"
                          onClick={() => onRemoveItem(product.id)}
                          className="mt-2 text-gray-400 hover:text-red-500 p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Cart Footer */}
            {items.length > 0 && (
              <div className="p-4 sm:p-5 border-t border-gray-100 bg-white space-y-3">
                <div className="space-y-1.5 text-xs text-[#546E7A]">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span className="font-mono font-bold text-[#243746]">PKR {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-1">
                      <Truck className="w-3.5 h-3.5 text-[#20B9D2]" />
                      <span>Discreet Delivery:</span>
                    </span>
                    <span className="font-mono font-bold text-[#243746]">
                      {deliveryFee === 0 ? <span className="text-[#16A34A]">FREE (Above PKR 3,000)</span> : `PKR ${deliveryFee}`}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-gray-100 flex justify-between items-center text-sm font-extrabold text-[#243746]">
                    <span>Total Amount:</span>
                    <span className="font-mono text-[22px] font-bold text-[#dc2626]">PKR {total.toLocaleString()}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href="https://wa.me/923007006133?text=Salam%20Tariq%20Mehmood%20sahib,%20I%20want%20to%20place%20an%20order%20for%20Healthy%20Life%20Medicine%20(Rs.%20500)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-md w-full inline-flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>واٹس ایپ پر آرڈر کریں (0300 7006133)</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setCheckoutStep('checkout')}
                    className="btn-green-custom bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-md w-full inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Lock className="w-5 h-5" />
                    <span>ڈسکریکٹ آن لائن چیک آؤٹ</span>
                  </button>

                  <p className="text-xs text-center text-gray-500 pt-1 flex items-center justify-center gap-1 font-medium">
                    <Phone className="w-3.5 h-3.5 text-[#16a34a]" />
                    <span>کال ہیلپ لائن: <a href="tel:03007006133" className="font-bold text-[#16a34a]">0300 7006133</a></span>
                  </p>
                </div>
              </div>
            )}
          </>
        )}

        {/* STEP 2: CHECKOUT */}
        {checkoutStep === 'checkout' && (
          <form onSubmit={handlePlaceOrder} className="flex flex-col justify-between flex-grow overflow-hidden">
            <div className="p-4 sm:p-5 overflow-y-auto flex-grow space-y-4">
              <div className="p-3.5 rounded-2xl bg-[#DCFCE7]/60 border border-[#bbf7d0] text-xs text-[#166534] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>100% Plain Cardboard Outer Box. No medicine or health labels visible.</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#243746] mb-1">
                  Recipient Name *
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="e.g. A. Khan"
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#243746] mb-1">
                  Delivery Mobile Number (For Rider Coordination) *
                </label>
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="e.g. 0300 7006133"
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#243746] mb-1">
                    City *
                  </label>
                  <select
                    value={customerCity}
                    onChange={(e) => setCustomerCity(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#20B9D2]"
                  >
                    <option value="Mian Channu">Mian Channu (میاں چنوں)</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Rawalpindi">Rawalpindi</option>
                    <option value="Faisalabad">Faisalabad</option>
                    <option value="Multan">Multan</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="Other City">Other Pakistan City</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#243746] mb-1">
                    Payment Method
                  </label>
                  <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value as any)}
                    className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="COD">Cash on Delivery (COD)</option>
                    <option value="BankTransfer">Online Bank Transfer</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#243746] mb-1">
                  Complete Street Address *
                </label>
                <textarea
                  required
                  rows={2}
                  value={customerAddress}
                  onChange={(e) => setCustomerAddress(e.target.value)}
                  placeholder="House / Apartment #, Street, Sector / Area"
                  className="w-full px-3 py-2 rounded-xl border border-gray-300 text-xs focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <label className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F5F9FA] border border-gray-200 cursor-pointer text-xs text-[#263238]">
                <input
                  type="checkbox"
                  checked={discreetPackaging}
                  onChange={(e) => setDiscreetPackaging(e.target.checked)}
                  className="mt-0.5 text-green-600 rounded focus:ring-green-500"
                />
                <span>
                  <strong>Strict Confidentiality:</strong> Keep parcel unbranded with neutral sender address (Highly recommended).
                </span>
              </label>
            </div>

            <div className="p-4 sm:p-5 border-t border-gray-100 bg-white space-y-3">
              <div className="flex justify-between items-center text-xs font-bold text-[#243746]">
                <span>Total Due on Delivery:</span>
                <span className="font-mono text-[22px] font-bold text-[#dc2626]">PKR {total.toLocaleString()}</span>
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setCheckoutStep('cart')}
                  className="px-4 py-2.5 rounded-[10px] border border-gray-200 text-xs font-bold text-gray-600 hover:bg-gray-100"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="btn-green-custom flex-grow bg-[#16a34a] hover:bg-[#15803d] text-white py-[12px] px-[20px] rounded-[10px] border-none text-[18px] font-bold shadow-md cursor-pointer transition-all"
                >
                  Confirm & Place Order
                </button>
              </div>
            </div>
          </form>
        )}

        {/* STEP 3: SUCCESS */}
        {checkoutStep === 'success' && (
          <div className="p-6 text-center space-y-4 my-auto">
            <div className="w-16 h-16 rounded-full bg-[#DCFCE7] text-[#16A34A] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-xl font-bold text-[#243746]">
              Order Placed Successfully!
            </h3>
            <p className="text-xs text-[#546E7A] max-w-sm mx-auto">
              Thank you, <strong>{customerName}</strong>. Your order has been registered in our dispensing queue.
            </p>

            <div className="p-4 rounded-2xl bg-[#F5F9FA] border border-gray-200 text-left text-xs space-y-1.5">
              <p><strong>Order Reference:</strong> <span className="font-mono text-[#20B9D2] font-bold">{confirmedOrderNumber}</span></p>
              <p><strong>Destination:</strong> {customerCity}</p>
              <p><strong>Packaging:</strong> 100% Plain Opaque Box (Discreet)</p>
              <p><strong>Estimated Delivery:</strong> 24–48 Hours</p>
            </div>

            <p className="text-[11px] text-gray-400">
              Our clinical logistics coordinator will send an automated SMS confirmation to <strong>{customerPhone}</strong>.
            </p>

            <button
              onClick={() => {
                setCheckoutStep('cart');
                onClose();
              }}
              className="w-full py-2.5 bg-[#20B9D2] hover:bg-[#189bb0] text-white text-xs font-bold rounded-xl"
            >
              Continue Shopping
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
