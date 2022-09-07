const router = require("express").Router();
const { request, response } = require("express");
const ContactModel = require("../models/contact.model");

router.post("/create-contact", async (request, response) => {
  try {
    console.log(request.body);
    const newContact = await ContactModel.create(request.body);
    return response.status(201).json(newContact);
  } catch (error) {
    console.log(error);
    return response.status(500).json(error);
  }
});

router.get("/read-contact", async (request, response) => {
  try {
    const contacts = await ContactModel.find();
    console.log(contacts.length);
    return response.status(201).json(contacts);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
});

router.get("/read-details-contact/:id", async (request, response) => {
  const id = request.params.id;

  try {
    const contactDetails = await ContactModel.findOne({ _id: id });
    return response.status(201).json(contactDetails);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
});

router.get("/info-contact", async (request, response) => {
  try {
    const sizeContact = (await ContactModel.find()).length;
    return response
      .status(201)
      .json(`Phonebook has info for ${sizeContact} people `);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
});

router.delete("/delete-contact/:id", async (request, response) => {
  const id = request.params.id;
  try {
    const deletedContact = await ContactModel.findOneAndDelete({ _id: id });
    return response.status(201).json(deletedContact);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
});

router.put("/update-contact/:id", async (request, response) => {
  const id = request.params.id;
  try {
    const updateContact = await ContactModel.findOneAndUpdate(
      { _id: id },
      { ...request.body },
      { new: true }
    );
    return response.status(201).json(updateContact);
  } catch (error) {
    console.error(error);
    return response.status(500).json(error);
  }
});

module.exports = router;
