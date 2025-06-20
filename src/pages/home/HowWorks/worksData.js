// src/data/worksData.js
import { FaTruck, FaMoneyCheckAlt, FaWarehouse, FaBuilding } from "react-icons/fa";

const works = [
    {
        icon: FaTruck,
        title: "Booking Pick & Drop",
        description:
            "Schedule parcel pickup from your doorstep and let us handle the safe delivery to the destination on time.",
    },
    {
        icon: FaMoneyCheckAlt,
        title: "Cash On Delivery",
        description:
            "We collect payments from your customers at the time of delivery and send the money straight to your account.",
    },
    {
        icon: FaWarehouse,
        title: "Delivery Hub",
        description:
            "We manage centralized delivery hubs across the country for efficient, fast, and organized parcel distribution.",
    },
    {
        icon: FaBuilding,
        title: "Booking SME & Corporate",
        description:
            "Specialized solutions for small businesses and corporate clients with scheduled pickups and delivery analytics.",
    },
];

export default works;
