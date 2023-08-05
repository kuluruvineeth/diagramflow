import { Icon } from "@iconify/react";

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full">
      <nav className="footer items-center p-1 text-neutral-content flex justify-between">
        <div className="items-center grid-flow-col">
          <div className="badge badge-sm self-end">diagramFlow</div>
        </div>
        <div className="grid-flow-col gap-2 md:place-self-center md:justify-self-end mr-4 font-serif flex">
          <span>Made with Love by</span>
          <a
            href="https://twitter.com/kuluruvineeth"
            target="__blank"
            rel="noreferrer"
          >
            <Icon
              icon="akar-icons:twitter-fill"
              className="text-xl text-[#1DA1F2]"
            />
          </a>
          <a
            href="https://github.com/kuluruvineeth"
            target="__blank"
            rel="noreferrer"
          >
            <Icon icon="akar-icons:github-fill" className="text-lg" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
