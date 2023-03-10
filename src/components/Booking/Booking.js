import Address from "../Address/Address";
import BookingForm from "../BookingForm/BookingForm";
import HeroBooking from "../HeroBooking/HeroBooking";

const Booking = () => {
  return(
    <main>
      <HeroBooking />
      <BookingForm />
      <Address />
    </main>
  );
};

export default Booking;
