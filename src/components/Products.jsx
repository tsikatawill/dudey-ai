import React from "react";
import Button from "./Button";

const Products = ({
  extraClasses,
  title,
  primarytext,
  secondarytext,
  btnText,
  btnVersion,
  image,
  it,
  ti,
}) => {
  return (
    <section className={`products py-5 ${extraClasses && extraClasses}`}>
      <div className="container text-lg-start text-center d-lg-flex my-5 py-5">
        {ti ? (
          <>
            <div className="text w-100 px-0 px-sm-4">
              <h2 className="text--primary">{title}</h2>
              <p className="my-4 lead" style={{ maxWidth: "400px" }}>
                {primarytext}
              </p>
              {secondarytext && (
                <p className="mb-4" style={{ maxWidth: "400px" }}>
                  {secondarytext}
                </p>
              )}
              {btnText && <Button version={btnVersion} text={btnText} />}
            </div>
            <div className="image-wrapper px-4 w-100 mb-4 mb-lg-0">{image}</div>
          </>
        ) : (
          it && (
            <>
              <div className="image-wrapper px-4 w-100 mb-4 mb-lg-0">
                {image}
              </div>
              <div className="text w-100 px-0 px-sm-4">
                <h2 className="text--primary">{title}</h2>
                <p className="my-4 lead" style={{ maxWidth: "400px" }}>
                  {primarytext}
                </p>
                {secondarytext && (
                  <p className="mb-4" style={{ maxWidth: "400px" }}>
                    {secondarytext}
                  </p>
                )}
                {btnText && <Button version={btnVersion} text={btnText} />}
              </div>
            </>
          )
        )}
      </div>
    </section>
  );
};

Products.defaultProps = {
  it: true,
};

export default Products;
