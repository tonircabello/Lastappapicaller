const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid")
const generateRandomId = () => uuidv4();
const generateRandomCode = () => {
  const randomNumber = Math.floor(Math.random() * 1000).toString().padStart(3, "0");
  return `G${randomNumber}`;
};
const generateRandomGlovo = () => {
  return Math.random().toString(36).substring(2, 10).toUpperCase();
};

const getGlovoOrderData = () => {
  const currentDate = new Date();
  currentDate.setMinutes(currentDate.getMinutes() + 10);

  return {
    brandId: "839c4414-bf81-4f9f-aca5-b24ecfe48df1",
    code: generateRandomGlovo(),
    source: "Glovo",
    locationId: "267e5d35-ca98-4d2c-8912-11bc297e0f93",
    products: [
      {
        type: "PRODUCT",
        id: generateRandomId(),
        name: "Burger",
        quantity: 2,
        price: 1000,
        modifiers: [
          { priceImpact: 300, id: generateRandomId(), name: "Extra meat", quantity: 2 },
          { priceImpact: 0, id: generateRandomId(), name: "Water (33 cl)", quantity: 1 },
        ],
      },
      {
        type: "PRODUCT",
        id: generateRandomId(),
        name: "Ice cream",
        quantity: 1,
        price: 480,
      },
    ],
    id: generateRandomId(),
    notes: "I am allergic to tomato",
    operationalCode: generateRandomCode(),
    pickupTime: currentDate.toISOString(),
    preferredPaymentMethod: "cash",
    customer: {
      name: "Bruce",
      surname: "Wayne",
      phoneNumber: "+34666666666",
      email: "hello@test.com",
    },
    delivery: {
      address: "Gran Via de les Corts Catalanes, test",
      details: "First door to the left",
      latitude: 41.3876734,
      longitude: 2.1647098,
      fee: 190,
    },
    payments: [{ method: "card", paidAmount: 7000 }],
  };
};
const miltonGlovoOrderData = () => {
  const currentDate = new Date();
  currentDate.setMinutes(currentDate.getMinutes() + 10);

  return {
    brandId: "2029da03-416b-40df-98dc-96915e809fcc",
    code: generateRandomGlovo(),
    source: "Glovo",
    locationId: "d555dfdc-a506-4514-b0f5-f6e56fe023ca",
    products: [
      {
        type: "PRODUCT",
        id: generateRandomId(),
        name: "Burger",
        quantity: 2,
        price: 1000,
        modifiers: [
          { priceImpact: 300, id: generateRandomId(), name: "Extra meat", quantity: 2 },
          { priceImpact: 0, id: generateRandomId(), name: "Water (33 cl)", quantity: 1 },
        ],
      },
      {
        type: "PRODUCT",
        id: generateRandomId(),
        name: "Ice cream",
        quantity: 1,
        price: 480,
      },
    ],
    id: generateRandomId(),
    notes: "I am allergic to tomato",
    operationalCode: generateRandomCode(),
    pickupTime: currentDate.toISOString(),
    preferredPaymentMethod: "cash",
    customer: {
      name: "Bruce",
      surname: "Wayne",
      phoneNumber: "+34666666666",
      email: "hello@test.com",
    },
    delivery: {
      address: "Gran Via de les Corts Catalanes, test",
      details: "First door to the left",
      latitude: 41.3876734,
      longitude: 2.1647098,
      fee: 190,
    },
    payments: [{ method: "card", paidAmount: 7000 }],
  };
};
const placeMiltonReservation = () => {
  const reservationDate = new Date();
  reservationDate.setMinutes(reservationDate.getMinutes() + 100);

 return{
    name: "Juanito",
    surname: "Jones",
    locationId: "d555dfdc-a506-4514-b0f5-f6e56fe023ca",
    // externalId: "",
    phoneNumber: "+34666111444",
    diners: 2,
    // customerComments: "",
    source: "ReservationPlatform",
    dateTime: reservationDate.toISOString(),
  };
}
const placeSalesReservation = () => {
  const reservationDate = new Date();
  reservationDate.setMinutes(reservationDate.getMinutes() + 100);

 return{
    name: "Juanito",
    surname: "Jones",
    locationId: "267e5d35-ca98-4d2c-8912-11bc297e0f93",
    // externalId: "",
    phoneNumber: "+34666111444",
    diners: 2,
    // customerComments: "",
    source: "ReservationPlatform",
    dateTime: reservationDate.toISOString(),
  };
}
const miltonJustEatOrder = async () => {
  const currentDate = new Date();
  currentDate.setMinutes(currentDate.getMinutes() + 10);

  return {
    brandId: "839c4414-bf81-4f9f-aca5-b24ecfe48df1",
    code: generateRandomGlovo(),
    source: "Glovo",
    locationId: "267e5d35-ca98-4d2c-8912-11bc297e0f93",
    products: [
      {
        type: "PRODUCT",
        id: generateRandomId(),
        name: "Burger",
        quantity: 2,
        price: 1000,
        modifiers: [
          { priceImpact: 300, id: generateRandomId(), name: "Extra meat", quantity: 2 },
          { priceImpact: 0, id: generateRandomId(), name: "Water (33 cl)", quantity: 1 },
        ],
      },
      {
        type: "PRODUCT",
        id: generateRandomId(),
        name: "Ice cream",
        quantity: 1,
        price: 480,
      },
    ],
    id: generateRandomId(),
    notes: "I am allergic to tomato",
    operationalCode: generateRandomCode(),
    pickupTime: currentDate.toISOString(),
    preferredPaymentMethod: "cash",
    customer: {
      name: "Bruce",
      surname: "Wayne",
      phoneNumber: "+34666666666",
      email: "hello@test.com",
    },
    delivery: {
      address: "Gran Via de les Corts Catalanes, test",
      details: "First door to the left",
      latitude: 41.3876734,
      longitude: 2.1647098,
      fee: 190,
    },
    payments: [{ method: "card", paidAmount: 7000 }],
  };
};

router.get("/miltonGlovoOrder", async (req, res, next) => {
  try {
    const response = await fetch("https://api.last.app/v2/tabs", {
      method: "POST",
      headers: {
        "Authorization": `Bearer e0a3a6f3-8552-42dd-be90-62d6f6aa32d4`,
        "Content-Type": "application/json",
        "locationId": "d555dfdc-a506-4514-b0f5-f6e56fe023ca"
      },
      body: JSON.stringify(miltonGlovoOrderData()),
    });

    if (!response.ok) {
      const errorDetails= await response.json();
      console.error("Error Details:", errorDetails);
      throw new Error(`HTTP error here! status: ${response.status}`)
    }

    const result = await response.json();
    if (res.statusCode=== 200) {
      res.status(200).json({ message: "Order created successfully" });
    } else {
      res.status(400).json({ message: "Order creation failed" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/salesGlovoOrder", async (req, res, next) => {
  try {
    const response = await fetch("https://api.last.app/v2/tabs", {
      method: "POST",
      headers: {
        "Authorization": `Bearer e0a3a6f3-8552-42dd-be90-62d6f6aa32d4`,
        "Content-Type": "application/json",
        "locationId": "267e5d35-ca98-4d2c-8912-11bc297e0f93"
      },
      body: JSON.stringify(getGlovoOrderData()),
    });

    if (!response.ok) {
      const errorDetails= await response.json();
      console.error("Error Details:", errorDetails);
      throw new Error(`HTTP error here! status: ${response.status}`)
    }

    const result = await response.json();
    if (res.statusCode=== 200) {
      res.status(200).json({ message: "Order created successfully" });
    } else {
      res.status(400).json({ message: "Order creation failed" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.get("/miltonReservation", async (req, res, next) => {
  try {
    const response = await fetch("https://api.last.app/v2/reservations", {
      method: "POST",
      headers: {
        "Authorization": `Bearer e0a3a6f3-8552-42dd-be90-62d6f6aa32d4`,
        "Content-Type": "application/json",
        "locationId": "d555dfdc-a506-4514-b0f5-f6e56fe023ca"
      },
      body: JSON.stringify(placeMiltonReservation()),
    });

    if (!response.ok) {
      const errorDetails= await response.json();
      console.error("Error Details:", errorDetails);
      throw new Error(`HTTP error here! status: ${response.status}`)
    }

    const result = await response.json();
    if (res.statusCode=== 200) {
      res.status(200).json({ message: "Order created successfully" });
    } else {
      res.status(400).json({ message: "Order creation failed" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.get("/salesReservation", async (req, res, next) => {
  try {
    const response = await fetch("https://api.last.app/v2/reservations", {
      method: "POST",
      headers: {
        "Authorization": `Bearer e0a3a6f3-8552-42dd-be90-62d6f6aa32d4`,
        "Content-Type": "application/json",
        "locationId": "267e5d35-ca98-4d2c-8912-11bc297e0f93"
      },
      body: JSON.stringify(placeSalesReservation()),
    });

    if (!response.ok) {
      const errorDetails= await response.json();
      console.error("Error Details:", errorDetails);
      throw new Error(`HTTP error here! status: ${response.status}`)
    }

    const result = await response.json();
    if (res.statusCode=== 200) {
      res.status(200).json({ message: "Order created successfully" });
    } else {
      res.status(400).json({ message: "Order creation failed" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



// router.get("/salesLocations", async (req, res, next) => {
//   const callLocations = async (token) => {
//     try {
//       const response = await fetch("https://api.last.app/v2/locations/?organizationId=88c6a22d-51d7-4b80-b686-f14be2f4f47e", {
//         method: 'GET', 
//         headers: {
//           'Authorization': `Bearer e0a3a6f3-8552-42dd-be90-62d6f6aa32d4`,
//           // 'Content-Type': 'application/json',
//           'organizationID':'88c6a22d-51d7-4b80-b686-f14be2f4f47e'
//         }
//       });
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const data = await response.json();
//       setLocations(data);
//     } catch (err) {
//       setError(err.message);
//     }
//   }});


module.exports = router;