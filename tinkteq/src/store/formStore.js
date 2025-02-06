
import { create } from 'zustand';

const useBookingStore = create((set) => ({
  formData: {
    cargoType: '',
    weight: '',
    dimensions: { length: '', width: '', height: '' },
    specialHandling: [],
    pickupAddress: { street: '', city: '', state: '', zipCode: '' },
    deliveryAddress: { street: '', city: '', state: '', zipCode: '' },
    pickupDate: '',
    deliveryDate: '',
    contactInformation: { name: '', email: '', phone: '' },
  },
  setFormData: (data) => set({ formData: { ...data } }),
  currentStep: 0,
  setCurrentStep: (step) => set({ currentStep: step }),
}));

export default useBookingStore;