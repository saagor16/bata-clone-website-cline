
const Navbar = () => {
  return (
    <div className="container mx-auto">

      {/* lg navbar */}
      <div className="hidden lg:flex justify-between p-5">
        <div className="flex gap-5">
          <p>icon1</p>
          <p>icon2</p>
        </div>
        <div>Logo</div>
        <div className="flex gap-5">
          <p>icon3</p>
          <p>icon4</p>
          <p>icon5</p>
          <p>icon6</p>
          <p>icon7</p>
        </div>
      </div>

      {/* mobile navbar */}
      <div className="lg:hidden flex justify-between p-5">
        <div className="flex gap-5">
          <p>icon1</p>
          <p>icon2</p>
        </div>
        <div>Logo</div>
        <div className="flex gap-5">
          <p>icon3</p>
          <p>icon4</p>
        </div>
      </div>
      
      {/* second navbar for lg devices */}
      <div className="hidden lg:flex justify-center  p-5 bg-gray-200">
        <div className="flex gap-5 text-center">
          <p>nav1</p>
          <p>nav2</p>
          <p>nav3</p>
          {/* Add more navigation items as needed */}
        </div>
      </div>

    </div>
  );
};

export default Navbar;
