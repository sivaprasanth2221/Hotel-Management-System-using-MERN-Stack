const express = require("express");
const app = express();
const dbconfig = require("./db");
app.use(express.json());
const roomsRoute = require("./routes/roomsRoute");
const userRoute = require("./routes/userRoute");
const bookingsRoute = require("./routes/bookingsRoute");

app.use("/api/rooms", roomsRoute);
app.use("/api/users", userRoute);
app.use("/api/bookings", bookingsRoute);
const port = process.env.PORT || 5400;

app.listen(port, () => console.log(`App listening on port - ${port}!`));
