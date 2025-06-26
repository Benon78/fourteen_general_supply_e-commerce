import { usePageTittle } from "../Components/utils/Helper";


// Import necessary components from react-leaflet
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import ContactDetails from "../Components/ContactDetails/ContactDetails";

const Contact = () => {
  usePageTittle("Contact - Fourteen General Supply");

  const position = [-6.777674, 39.265941]; // Lat, Lng for Faykat Tower

  return (
    <div className="contact">
      <div className="contat-header">
        <h1>Contact Us</h1>
        <p>About Fourteen General Supply</p>
      </div>

      {/* Responsive Map Container */}
      <div style={{ width: "100%", height: "450px", marginTop: "20px" }}>
        <MapContainer
          center={position}
          zoom={15}
          style={{ height: "100%", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />
          <Marker position={position}>
            <Popup>
              Faykat Tower <br /> Tanzania
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    <ContactDetails/>
    </div>
  );
};

export default Contact;
