/*
 * HP Enterprise | TSRnD Bengaluru, India
 * @author: Akshay Kr Singh
 * @date:   2/4/2017
 * @email: akshay.singh@hpe.com
 */
let ejs = require("ejs");
let path = require("path");
let emailTemplates = require("email-templates");
let templateDir = path.resolve("templates");
let nodeMailer = require("nodemailer");
let async = require("async");

module.exports.sendEmail = (options, callback) => {
  let locals = {
    booking: {
      address: options.address,
      firstName: options.firstName,
      timeSlot: options.timeSlot,
      phoneNumber: options.phoneNumber,
      serviceTitle: options.serviceTitle,
      serviceCost: options.serviceCost,
      paymentLink: options.paymentLink,
      category: options.category,
      bookingLocation: options.bookingLocation
    }
  };

  emailTemplates(templateDir, (error, template) => {
    if (error) return callback(error);

    // create reusable transporter object using the default SMTP transport
    let transporter = nodeMailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'info@wiperr.com',
        pass: '123@wiperr'
      }
    });

    switch (options.type) {
      case "bookingRequest":
        async.parallel([
          (next) => {
            template("bookingConfirmation", locals, (error, html) => {
              if (error) {
                console.log(error);
                return next(error);
              }

              let mailOptions = {
                from: '"Wiperr Info" <info@wiperr.com>',
                to: options.customerEmail,
                subject: 'Wiperr Booking Confirmation',
                html: html
              };

              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  return next(error);
                }

                next(null, info);
              });
            });
          },
          (next) => {
            template("bookingNotification", locals, (error, html) => {
              if (error) {
                return next(error);
              }

              let mailOptions = {
                from: '"Wiperr Info" <info@wiperr.com>',
                to: options.mailList,
                subject: 'Wiperr Booking Notification',
                html: html
              };

              transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                  return next(error);
                }

                next(null, info);
              });
            });
          }
        ], (error, results) => {
          if (error) return callback(error);
          callback(null, results);
        });
        break;
      case "requestCall":
        template("requestCall", locals, (error, html) => {
          if (error) {
            console.log(error);
            return callback(error);
          }

          let mailOptions = {
            from: '"Wiperr Info" <info@wiperr.com>',
            to: options.mailList,
            subject: 'Wiperr Callback Request',
            html: html
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
              return callback(error);
            }

            callback(null, info);
          });
        }); break;
        case "invoice":
          template("invoice", locals, (error, html) => {
            if (error) {
              console.log(error);
              return callback(error);
            }

            let mailOptions = {
              from: '"Wiperr Invoice" <info@wiperr.com>',
              to: options.mailList,
              subject: 'Your invoice for the service - ' + options.serviceName,
             /* html: 'Your invoice : <img src="cid:uniqueInvoiceMailImage"/>',*/
              html: html,
              attachments: [{
                content: options.invoiceImage.split("base64,")[1],
                encoding: 'base64',
                cid: 'uniqueInvoiceMailImage'
              }]
            };

         transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
              return callback(error);
            }

            callback(null, info);
        });
        });
    }
  });
};
