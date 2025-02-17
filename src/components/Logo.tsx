import logo from '/Logo.png';
export default function Logo() {
  return (
    <div className="flex items-center justify-center   ">
      <img src={logo} alt="logo" className="w-[250px] h-14" />
    </div>
  );
}
