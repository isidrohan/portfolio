import '../style/Footer.css'

export const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <section className="footer-cotainer">
            <p>Copyright © {year} siddharth rohan</p>
        </section>
    )
}