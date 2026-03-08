const CircleFilled = ({ onClick }: { onClick?: () => void }) => (
  <svg onClick={onClick} className="circle-filled cursor-pointer" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="6" r="6" />
  </svg>
);

export default CircleFilled;
