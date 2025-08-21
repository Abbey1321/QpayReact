import { MdKeyboardArrowRight } from "react-icons/md";

export default function Card({ title, subtitle, children, footer, ClassName, rightArrow }){
  return (
    <section className={`card ${ClassName}`}>
      {(title || subtitle) && (
        <header className="card-header">
          <div>
            {title && <h3>{title}</h3>}
            {subtitle && <p className="muted">{subtitle}</p>}
          </div>
          {rightArrow &&
            <MdKeyboardArrowRight/>
          }
        </header>
      )}
      <div className="card-body">{children}</div>
      {footer && <footer className="card-footer">{footer}</footer>}
    </section>
  )
}