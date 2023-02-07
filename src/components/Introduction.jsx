function Introduction() {
  return (
    <div className="introduction">
      <div className="outside_table">
        <p>Get started with Marketing</p>
        <p className="skip_onboarding">Skip onboarding</p>
      </div>
      <div className="introduction_steps">
        <div className="step completed">
          <img
            className="completed_icon"
            src="https://e7.pngegg.com/pngimages/341/867/png-clipart-white-check-with-green-background-illustration-fingerprint-comcast-circle-symbol-technology-tick-miscellaneous-angle.png"
            alt=""
          />
          <div>
            <p>Complete your profile</p>
          </div>
        </div>
        <div className="step">
          <img
            className="incomplete_icon"
            src="https://www.pngfind.com/pngs/m/34-341713_image-transparent-library-file-small-dark-grey-wikimedia.png"
            alt=""
          />
          <div>
            <p>Add your first contacts</p>
            <p className="step_extra_info">
              Import contacts from a file, a CRM or add contacts manually. You
              can do all 3.
            </p>
          </div>
        </div>
        <div className="step">
          <img
            className="incomplete_icon"
            src="https://www.pngfind.com/pngs/m/34-341713_image-transparent-library-file-small-dark-grey-wikimedia.png"
            alt=""
          />
          <div>
            <p>Schedule your first campaign</p>
            <p className="step_extra_info">
              Need inspiration? Browse our gallery and pick a template.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
