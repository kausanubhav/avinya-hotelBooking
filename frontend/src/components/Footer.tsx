const Footer = () => {
  return (
    <div className="bg-blue-800 py-6 sm:py-10">
      <div className="container mx-auto flex justify-between items-center gap-3 sm:gap-10">
        <span className="text-2xl sm:text-3xl text-white font-bold tracking-tight">
          AvinyaBooking.com
        </span>
        <span className="text-white font-bold tracking-tight flex gap-2 sm:gap-4 items-center ">
          <p className="cursor-pointer leading-none">Privacy Policy</p>
          <p className="cursor-pointer leading-none">Terms of Service</p>
        </span>
      </div>
    </div>
  )
}
export default Footer
