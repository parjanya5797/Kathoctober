<template>
  <section class="section section-dark section-contact" id="contact">
    <div class="container">
      <SectionHead subtitle="SAY HELLO" maintitle="CONTACT" />
    </div>

    <div class="contact-Otherdetails">
      <div class="container">
        <ContactDetail />
        <div class="contact-form mt-5">
          <form
            method="post"
            action="php/contact.php"
            id="contactForm"
            data-toggle="validator"
          >
            <h5 class="section-subHead mb-2">Contact Form</h5>
            <div class="row">
              <div class="col-lg-6">
                <div
                  class="form-group mt-3 wow fadeInUp"
                  data-wow-duration="1.5s"
                >
                  <input
                    name="name"
                    id="name"
                    type="text"
                    class="form-control b-box"
                    placeholder="Your Name *"
                    required
                  />
                </div>
              </div>
              <div class="col-lg-6">
                <div
                  class="form-group mt-3 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay=".2s"
                >
                  <input
                    name="email"
                    id="email"
                    type="email"
                    class="form-control b-box"
                    placeholder="Your Email *"
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div
                  class="form-group mt-3 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay=".3s"
                >
                  <input
                    type="text"
                    class="form-control b-box"
                    id="subject"
                    placeholder="Your Subject.."
                    required
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div
                  class="form-group mt-3 wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay=".4s"
                >
                  <textarea
                    name="comments"
                    id="comments"
                    rows="4"
                    class="form-control b-box"
                    placeholder="Your message..."
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="row">
              <div
                class="col-lg-12 mt-4 mb-5 text-center wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay=".5s"
              >
                <button type="submit" class="submitBnt btn hover-state">
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import SectionHead from "./SectionHead";
import ContactDetail from "./ContactDetail";
export default {
  name: "Contact",
  components: {
    SectionHead,
    ContactDetail
  }
};
</script>


<style>
.section-contact {
  padding-bottom: 30px !important;
}

.contact-map--container {
  height: 450px;
  overflow: hidden;
}

.contact-details--panel i {
  font-size: 30px;
}

.contact-details--panel a {
  font-size: 18px;
  font-weight: 500;
  color: #6e7373;
  text-decoration: underline;
}

.contact-details--panel a:hover {
  text-decoration: none;
}

.contact-details--panel p {
  font-family: "Josefin Sans", sans-serif;
  font-size: 14px;
  color: #333;
  font-weight: 400;
}

.form-control {
  padding: 15px 30px;
  height: auto;
  font-family: "Open Sans", sans-serif;
}

.section-contact .section-subHead {
  margin: 0;
}
</style>