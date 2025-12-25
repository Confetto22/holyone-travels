import type { ServiceItem } from "@/data/services"

const CheckoutPage = ({ service }: { service: ServiceItem }) => {
  console.log(service)
  return (
    <section className="min-h-screen bg-blue-600">
      {/* <p>Service - ${service}</p> */}
    </section>
  )
}

export default CheckoutPage;