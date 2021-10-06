import React from 'react';
import * as Fylo from './style';
import fyloImg from '../../assets/images/logo.svg';
import doc from '../../assets/images/icon-document.svg';
import folder from '../../assets/images/icon-folder.svg';
import upload from '../../assets/images/icon-upload.svg';

function FyloInfo() {
  return (
    <Fylo.FyloDiv>
      <img src={fyloImg} alt="" />

      <Fylo.iconContent>
        <Fylo.iconDiv space={[10, 12]}>
          <img src={doc} alt="" />
        </Fylo.iconDiv>
        <Fylo.iconDiv space={[12, 10]}>
          <img src={folder} alt="" />
        </Fylo.iconDiv>
        <Fylo.iconDiv space={[12, 8]}>
          <img src={upload} alt="" />
        </Fylo.iconDiv>
      </Fylo.iconContent>
    </Fylo.FyloDiv>
  );
}

export { FyloInfo };
