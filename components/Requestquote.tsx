const Requestquote = () => {
  return (
    <div className="requestquote">
      <h5>Free Estimation</h5>
      <h2>Request A Quote</h2>

      <div className="input-group">
        <input type="text" name="name" autoComplete="off" placeholder=" " />
        <label htmlFor="">Name</label>
      </div>

      <div className="input-group">
        <input type="email" name="name" autoComplete="off" placeholder=" " />
        <label htmlFor="">Email</label>
      </div>

      <div className="input-group">
        <input type="text" name="name" autoComplete="off" placeholder=" " />
        <label htmlFor="">Phone Number</label>
      </div>

      <div className="input-group">
        <select name="">
          <option value="Aluzinc">Aluzinc</option>
        </select>
        <label htmlFor="">Material Type</label>
      </div>

      <div className="input-group">
        <select name="">
          <option hidden>----Select Colour----</option>
          <option value="Deep Ocean">Deep Ocean</option>
          <option value="Wine Red">Wine Red</option>
          <option value="Coffee Brown">Coffee Brown</option>
          <option value="Jasper">Jasper</option>
          <option value="Brick Red">Brick Red</option>
          <option value="Tomato Red">Tomato Red</option>
          <option value="Pepper Red">Pepper Red</option>
          <option value="Sea Blue">Sea Blue</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="">Premium Colors</label>
      </div>

      <div className="input-group">
        <select name="">
          <option hidden>----Select Project----</option>
          <option value="School">School</option>
          <option value="Estate">Estate</option>
          <option value="Hospital">Hospital</option>
          <option value="Church">Church</option>
          <option value="Other">Other</option>
        </select>
        <label htmlFor="">Project *</label>
      </div>

      <div className="file-group">
        <label htmlFor="fileupload">
          Upload File
          <input type="file" id="fileupload" />
        </label>
      </div>

      <button>Get a Free Quote</button>
    </div>
  );
};

export default Requestquote;
