import React from 'react';
import * as InfoS from './style';

function Info() {
  return (
    <InfoS.InfoDiv>
      <InfoS.InfoData>
        <h1>
          You’ve used <span>815 GB</span> of your storage
        </h1>
        <div>
          {/* Div que sustenta o slider e os textos com valores */}
          <InfoS.DivContent>
            {/* Div com o content atrás do slider */}
            <div>
              {/* div slider */}
              <div>{/* div com a bolinha dentro do slider */}</div>
            </div>
          </InfoS.DivContent>
          <InfoS.DivInfo>
            <h2>0 GB</h2>
            <h2>1000 GB</h2>
          </InfoS.DivInfo>
        </div>
      </InfoS.InfoData>
      <InfoS.GbLeft>
        <h1>185</h1>
        <span>GB LEFT</span>
      </InfoS.GbLeft>
    </InfoS.InfoDiv>
  );
}

export { Info };
