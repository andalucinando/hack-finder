const Event = require('../models/Event');

exports.getAllEvents = (req, res, next) => {
  Event.find()
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getEventDetails = (req, res, next) => {
  const id = req.params.id;

  Event.findById(id)
    .then((event) => {
      res.json(event);
    })
    .catch((err) => {
      next(err);
    });
};

exports.getEventsByCreator = (req, res, next) => {
  const creatorId = req.params.id;
  console.log(creatorId)

  Event.find({ creator: creatorId })
    .then((events) => {
      res.json(events);
    })
    .catch((err) => {
      next(err);
    });
};

exports.createEvent = (req, res, next) => {
  let event = JSON.parse(req.body.data);
  if (req.file) {
    event.banner = {
      imgPath: req.file.path,
      publicId: req.file.filename,
    };
  }
  Event.create(event)
    .then(() => {
      return res.status(200).json({ success: 'Created event.' });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ message: 'Error while creating the event.' });
    });
};

exports.updateEvent = (req, res, next) => {
  res.json({ feedback: 'updateEvent' });
};

exports.deleteEvent = (req, res, next) => {
  res.json({ feedback: 'deleteEvent' });
};

exports.searchEvent = (req, res, next) => {
  res.json({ feedback: 'getEventDetails' });
};
