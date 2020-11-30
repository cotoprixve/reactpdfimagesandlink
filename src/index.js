import React from "react";
import ReactDOM from "react-dom";
import {
  BlobProvider,
  Document,
  Page,
  Text,
  View,
  Image,
  Link,
  StyleSheet
} from "@react-pdf/renderer";
import PSPDFKit from "./PSPDFKit";

import "./styles.css";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column"
  },
  image: {
    width: "50%",
    padding: 10
  },
  centerImage: {
    alignItems: "center",
    flexGrow: 1
  },
  text: {
    width: "100%",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 50,
    paddingVertical: 30,
    color: "#212121"
  }
});

const MyDocument = (
  <Document>
    <Page style={styles.page} size="A4">
      <View style={styles.centerImage}>
        <Image style={styles.image} src="/pspdfkit-logo.png" />
      </View>
      <Text style={styles.text}>
        PSPDFKit GmbH is the leading cross-platform SDK solution for integrating
        PDF support on all major platforms: iOS, Android, Windows, macOS, and on
        Web (both server-based and standalone via WebAssembly).
      </Text>
      <Text style={styles.text}>
        Our solutions enable customers to seamlessly add powerful PDF viewing,
        editing, annotating, and form filling/signing into their app in under 15
        minutes, saving months of development time and expense.
      </Text>
      <Text style={styles.text}>
        Learn more at <Link src="https://pspdfkit.com/">pspdfkit.com</Link>
      </Text>
    </Page>
  </Document>
);

// Render the PDF using React DOM
ReactDOM.render(
  <BlobProvider document={MyDocument}>
    {({ blob, url, loading, error }) => {
      if (blob) {
        return <PSPDFKit blob={blob} />;
      }

      if (error) {
        return error;
      }

      return <div>The PDF is rendering...</div>;
    }}
  </BlobProvider>,
  document.getElementById("root")
);
