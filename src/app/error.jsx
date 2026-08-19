"use client";

import FigureError from "@/components/figureError";

export default function Error(){
    return(
        <>
            <div className="container-notfound">
                <div className="flex-notfound">
                    <h2>ERRO 404</h2>
                    <p>Tenta denovo fiot</p>
                    <FigureError/>
                </div>
            </div>
        </>
    )
}