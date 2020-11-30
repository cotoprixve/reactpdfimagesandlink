import React, { Component } from "react";

const LICENSE_KEY =
  "HvWt82h94RsmeBTTU_4_G0FED3nnsfWwGBVHtty44kDbxr8C806DsVHTCzambnmuWV3y06YrQdkZwuSTpX-MEyiBPD91lCKXD0sNnMhDUVdOZIktooaoHjIdGcsO3LZL-b3rOlJcjjK9ERpZ_n74UG_VRcMF2Uc_YwmOF8q-dUjvwF6bLcK6ooewdgc-KfJYi2p2WqRD_StWjSIDFFPmio7PTFH7Rbx8r7jVh20DiM8iQnCBw5bH737BIuVekjehazdTGWLzJzKrf4GTlhYELDX8TWj_lbNbpe22K0SSV1aCZ-hWDHg0Hkk70YxAAY-k8Tph44oVUcMX7lADdx8W5sMXaFqdLiG5OVkEs1bLY6yFLFuFeXlC3YoYbqAvFSWoCYJr03DxcF0Rk-PUp17guzTHDvnse3TI0pzKWi974fuXEbNlq1Skoq2aMNGlUw_jK_pUIXewakeN4nG3n_T8pRe4H6joQNRXpZfRjE_nOc6lakGR5p2amRHan2tP_Bsby-VHdIekjNwP6BrttRaH4Q77ye9cpVevlG3Sz1L94p2zcnJmWYczcAB-uxOtpxyUZb2PShWmrEulU3tNDpL13A==";

export default class PSPDFKit extends Component {
  containerRef = React.createRef();

  componentDidMount() {
    const url = URL.createObjectURL(this.props.blob);
    window.PSPDFKit.load({
      pdf: url,
      container: this.containerRef.current,
      licenseKey: LICENSE_KEY
    });
  }

  componentWillUnmount() {
    window.PSPDFKit.unload(this.containerRef.current);
  }

  render() {
    return (
      <div
        ref={this.containerRef}
        style={{ width: "100%", height: "100%", position: "absolute" }}
      />
    );
  }
}
