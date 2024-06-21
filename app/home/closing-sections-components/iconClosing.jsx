import Link from 'next/link';

import {
  AiOutlineMail,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from 'react-icons/ai';

export default function IconClosing() {
  return (
    <div className="flex">
      <div className="py-5 pr-5 desktopMinWidth:">
        <Link href="mailto:agungrosyandi@gmail.com">
          <AiOutlineMail size={20} />
        </Link>
      </div>
      <div className="py-5 pr-5">
        <Link href="https://www.instagram.com/narasihistorian/" target="_blank">
          <AiOutlineInstagram size={20} />
        </Link>
      </div>
      <div className="py-5 ">
        <Link
          href="https://www.youtube.com/channel/UCNoUf4xYawhvK6dD94oDEDg"
          target="_blank"
        >
          <AiOutlineYoutube size={20} />
        </Link>
      </div>
    </div>
  );
}
