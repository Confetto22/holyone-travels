export interface CheckoutFormData {
  // Step 1
  fullName: string;
  email: string;
  // Step 2
  destination: string;
  travelDate: string;
  // Step 3
  passportNumber: string;
  nationality: string;
  // Step 4
  purposeOfTravel: string;
  additionalNotes?: string;
}
