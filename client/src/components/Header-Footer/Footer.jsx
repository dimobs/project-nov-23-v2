// import './styleComponent.css'

const Footer = () => {
    return (
        <div className="flex flex-wrap -mx-3 mb-5">
        <div className="w-full max-w-full sm:w-3/4 mx-auto text-center">
          <p className="text-sm text-slate-500 py-1 dark:text-slate-400">
            {" "}
       This project was created by{" "}
            <a
              href="https://portfolio-dimo.web.app/"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-200"
              target="_blank"
            >
             Dimo Karachorbadzhiev
            </a>{" "}
            Go to...{" "}
            <a
              href="https://www.linkedin.com/in/dimo-karachorbadzhiev-313418123/"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-200"
              target="_blank"
            >
              LinkIn
            </a>
            .{" "}
          </p>
        </div>
      </div>
    );
};

export default Footer;