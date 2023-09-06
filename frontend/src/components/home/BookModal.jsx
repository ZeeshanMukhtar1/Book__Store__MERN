import { AiOutlineClose } from 'react-icons/ai';
import { PiBookOpenTextLight } from 'react-icons/pi';
import { BiUserCircle } from 'react-icons/bi';
import { BsCalendarDate } from 'react-icons/bs';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { BsPencilFill } from 'react-icons/bs';
import { FaRecycle } from 'react-icons/fa';
const formatDate = (date) => {
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };
  return new Date(date).toLocaleString(undefined, options);
};

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.publishYear}
        </h2>
        <div className="flex justify-start items-center gap-x-2">
          <BsFillPersonCheckFill className="text-red-300 text-2xl" />
          <h2 className="my-1">{book._id}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BsCalendarDate className="text-red-300 text-2xl" />
          <h2 className="my-1">{book.publishYear}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BsPencilFill className="text-red-300 text-2xl" />
          <h2 className="my-1"> {formatDate(book.updatedAt)}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <FaRecycle className="text-red-300 text-2xl" />
          <h2 className="my-1"> {formatDate(book.updatedAt)}</h2>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
