<section id="last" class="bg-primary">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-lg-offset-2 text-center">
                    <h2 class="margin-top-0 wow fadeIn">Get in Touch</h2>
                    <p id="feedback"><?php echo $feedback; ?>
                    <hr class="primary">
                </div>
                <div class="col-lg-10 col-lg-offset-1 text-center">
                    <form class="contact-form row" name="form1" method="post" action="?">
                        <div class="col-md-4">
                            <label></label>
                            <input name="name" id="name" type="text" class="form-control" placeholder="Your name" >
                        </div>
                        <div class="col-md-4">
                            <label></label>
                            <input type="text" name="sender_email" id="sender_email"class="form-control" placeholder="Your Email" >
                        </div>
                        <div class="col-md-4">
                            <label></label>
                            <input type="text" id="subject" name="subject" class="form-control" placeholder="The subject" >
                        </div>
                        <div class="col-md-12">
                            <label></label>
                            <textarea name="message" id="
                            message" class="form-control" rows="9" placeholder="Your message"></textarea>
                        </div>
                        <div class="col-md-4 col-md-offset-4">
                            <label></label>
                            <button title="Click to send" type="submit" name="Submit" data-toggle="modal" data-target="#alertModal" class="btn btn-primary btn-block btn-lg">Send <i class="ion-android-arrow-forward"></i></button>
                            <button title="Click to clear the form"type="reset" name="Submit2" data-toggle="modal" data-target="#alertModal" class="btn btn-primary btn-block btn-lg">Reset <i class="ion-android-arrow-forward"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
