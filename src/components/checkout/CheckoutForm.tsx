"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function CheckoutForm() {
  const router = useRouter();
  const { clearCart } = useCart();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function validate(): boolean {
    const newErrors: Record<string, string> = {};
    if (!form.email.includes("@")) newErrors.email = "Valid email required";
    if (!form.firstName.trim()) newErrors.firstName = "Required";
    if (!form.lastName.trim()) newErrors.lastName = "Required";
    if (!form.address.trim()) newErrors.address = "Required";
    if (!form.city.trim()) newErrors.city = "Required";
    if (!form.state.trim()) newErrors.state = "Required";
    if (!form.zip.trim()) newErrors.zip = "Required";
    if (form.cardNumber.replace(/\s/g, "").length < 16) newErrors.cardNumber = "Enter 16 digits";
    if (!form.expiry.match(/^\d{2}\/\d{2}$/)) newErrors.expiry = "MM/YY format";
    if (form.cvv.length < 3) newErrors.cvv = "3 digits required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    clearCart();
    router.push("/checkout/success");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          error={errors.email}
        />
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
        <div className="grid grid-cols-2 gap-4">
          <Input
            id="firstName"
            name="firstName"
            label="First Name"
            value={form.firstName}
            onChange={handleChange}
            error={errors.firstName}
          />
          <Input
            id="lastName"
            name="lastName"
            label="Last Name"
            value={form.lastName}
            onChange={handleChange}
            error={errors.lastName}
          />
        </div>
        <div className="mt-4">
          <Input
            id="address"
            name="address"
            label="Address"
            value={form.address}
            onChange={handleChange}
            error={errors.address}
          />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <Input
            id="city"
            name="city"
            label="City"
            value={form.city}
            onChange={handleChange}
            error={errors.city}
          />
          <Input
            id="state"
            name="state"
            label="State"
            value={form.state}
            onChange={handleChange}
            error={errors.state}
          />
          <Input
            id="zip"
            name="zip"
            label="ZIP Code"
            value={form.zip}
            onChange={handleChange}
            error={errors.zip}
          />
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Payment</h2>
        <div className="space-y-4">
          <Input
            id="cardNumber"
            name="cardNumber"
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            value={form.cardNumber}
            onChange={handleChange}
            error={errors.cardNumber}
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              id="expiry"
              name="expiry"
              label="Expiry"
              placeholder="MM/YY"
              value={form.expiry}
              onChange={handleChange}
              error={errors.expiry}
            />
            <Input
              id="cvv"
              name="cvv"
              label="CVV"
              placeholder="123"
              value={form.cvv}
              onChange={handleChange}
              error={errors.cvv}
            />
          </div>
        </div>
      </div>

      <Button type="submit" size="lg" className="w-full">
        Place Order
      </Button>
    </form>
  );
}
