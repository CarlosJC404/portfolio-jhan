import "../css/FormContact.css"

export const FormContact = () => {
    return (
        <section id="form-contact">
            <h1 className="titles">Contact</h1>
            <div className="container-form">
                <form action="" className="form">
                    <div className="input-box">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" autoComplete="off"/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" autoComplete="off"/>
                    </div>
                    <div className="input-box">
                        <label htmlFor="description">Description</label>
                        <textarea name="" id="description" cols="30" rows="10" autoComplete="off"></textarea>
                    </div>
                    <div className="input-submit">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        </section>
    )
}