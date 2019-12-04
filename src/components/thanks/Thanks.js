import React from 'react';
import './Thanks.css';
import { Link } from 'react-router-dom';
import ProjektData from '../../data/ProjektData';

const Thanks = () => {
    return (
        <section className="thanks-block centering">
            <article className="thanks-article">
                <h1 className="thanks-heading">{(ProjektData.gender === "Divers") ? '' : ProjektData.gender} {ProjektData.name},</h1>
                <p>Du hast alle nötigen Fragen<br />
                    beantwortet die wir brauchen.</p><br />
                <p>Vielen Dank für deine Anfrage<br />
                    Wir werden deine Angaben anschauen und dich dann kontaktieren.</p>

                <p style={{ marginBottom: '20px' }}>Wenn du dein Formular ansehen oder bearbeiten möchtest<br />
                    Fordere hier einen <Link >Magic Link</Link> an.</p>
                <Link to="/userplatform" className='SonstigesInfo'>Zurück zur Startseite</Link>
            </article>
        </section>
    );
}

export default Thanks;