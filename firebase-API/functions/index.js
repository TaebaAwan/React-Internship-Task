const functions = require("firebase-functions");

const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://internee-b088e-default-rtdb.firebaseio.com",
});
const db = admin.firestore();
const { response } = require("express");
const app = express();

app.use(cors({ origin: true }));

app.get("/", (req, res) => {
  return res.status(200).send("Hello tayyaba");
});
// create user
app.post("/api/create", (req, res) => {
  (async () => {
    try {
      const userCredential = await admin.auth().createUser({
        email: req.body.email,
        password: req.body.password,
      });
      const uniqueId = userCredential.uid;
      await db.collection("userData").doc(`/${Date.now()}/`).create({
        id: Date.now(),
        uid: uniqueId,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        course: req.body.course,
        phone: req.body.phone,
      });

      return res
        .status(200)
        .send({ status: "Success", msg: "Data Saved", id: Date.now() });
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});

// get specific user details
app.get("/api/userDetail/:id", (req, res) => {
  (async () => {
    try {
      const reqDoc = db.collection("userData").doc(req.params.id);
      let userDetail = await reqDoc.get();

      let response = userDetail.data();
      console.log("User detail:", response);

      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});
//update
app.put("/api/update/:id", (req, res) => {
  (async () => {
    try {
      const reqDoc = db.collection("userData").doc(req.params.id);
      await reqDoc.update({
        name: req.body.name,
        password: req.body.password,
        course: req.body.course,
        phone: req.body.phone,
      });
      return res.status(200).send({ status: "Success", msg: "Data Updated" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});

//delete User Info
app.delete("/api/delete/:id", (req, res) => {
  (async () => {
    try {
      const reqDoc = db.collection("userData").doc(req.params.id);
      await reqDoc.delete();
      return res.status(200).send({ status: "Success", msg: "Data Removed" });
    } catch (error) {
      console.log(error);
      res.status(500).send({ status: "Failed", msg: error });
    }
  })();
});
exports.app = functions.https.onRequest(app);
