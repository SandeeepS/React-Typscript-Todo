function ImageHeader() {
  return (
    <div className="flex items-center mb-8">
      <img
        className="w-28 h-28 object-contain"
        src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png"
        alt=""
      />
      <span className="mx-4 text-white">+</span>
      <img
        className="w-28 h-28 object-contain"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
        alt=""
      />
    </div>
  );
}

export default ImageHeader;
