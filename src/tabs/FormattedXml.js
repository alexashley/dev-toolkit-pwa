import React, { useState } from 'react';
import InputPreviewPane from '../components/InputPreviewPane';

// taken from https://docs.microsoft.com/en-us/windows/desktop/wsw/calculatorwsdl
const defaultXml = `
<wsdl:definitions 
  xmlns:soap="https://schemas.xmlsoap.org/wsdl/soap/" 
  xmlns:wsu="https://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd" 
  xmlns:soapenc="https://schemas.xmlsoap.org/soap/encoding/" 
  xmlns:tns="https://Example.org" 
  xmlns:wsa="https://schemas.xmlsoap.org/ws/2004/08/addressing" 
  xmlns:wsp="https://schemas.xmlsoap.org/ws/2004/09/policy" 
  xmlns:wsap="https://schemas.xmlsoap.org/ws/2004/08/addressing/policy" 
  xmlns:xsd="https://www.w3.org/2001/XMLSchema" 
  xmlns:msc="https://schemas.microsoft.com/ws/2005/12/wsdl/contract" 
  xmlns:wsaw="https://www.w3.org/2006/05/addressing/wsdl" 
  xmlns:soap12="https://schemas.xmlsoap.org/wsdl/soap12/" 
  xmlns:wsa10="https://www.w3.org/2005/08/addressing" 
  xmlns:wsx="https://schemas.xmlsoap.org/ws/2004/09/mex" targetNamespace="https://Example.org" 
  xmlns:wsdl="https://schemas.xmlsoap.org/wsdl/">
<wsdl:types>
<xsd:schema targetNamespace="https://Example.org" elementFormDefault="qualified" >
<xsd:element name="Add">
<xsd:complexType>
<xsd:sequence>
<xsd:element minOccurs="0" name="a" type="xsd:int" />
<xsd:element minOccurs="0" name="b" type="xsd:int" />
</xsd:sequence>
</xsd:complexType>
</xsd:element>
<xsd:element name="AddResponse">
<xsd:complexType>
<xsd:sequence>
<xsd:element minOccurs="0" name="result" type="xsd:int" />
</xsd:sequence>
</xsd:complexType>
</xsd:element>
<xsd:element name="Subtract">
<xsd:complexType>
<xsd:sequence>
<xsd:element minOccurs="0" name="a" type="xsd:int" />
<xsd:element minOccurs="0" name="b" type="xsd:int" />
</xsd:sequence>
</xsd:complexType>
</xsd:element>
<xsd:element name="SubtractResponse">
<xsd:complexType>
<xsd:sequence>
<xsd:element minOccurs="0" name="result" type="xsd:int" />
</xsd:sequence>
</xsd:complexType>
</xsd:element>
</xsd:schema>
</wsdl:types>
<wsdl:message name="ICalculator_Add_InputMessage">
<wsdl:part name="parameters" element="tns:Add" />
</wsdl:message>
<wsdl:message name="ICalculator_Add_OutputMessage">
<wsdl:part name="parameters" element="tns:AddResponse" />
</wsdl:message>
<wsdl:message name="ICalculator_Subtract_InputMessage">
<wsdl:part name="parameters" element="tns:Subtract" />
</wsdl:message>
<wsdl:message name="ICalculator_Subtract_OutputMessage">
<wsdl:part name="parameters" element="tns:SubtractResponse" />
</wsdl:message>
<wsdl:portType name="ICalculator">
<wsdl:operation name="Add">
<wsdl:input wsaw:Action="https://Example.org/ICalculator/Add" message="tns:ICalculator_Add_InputMessage" />
<wsdl:output wsaw:Action="https://Example.org/ICalculator/AddResponse" message="tns:ICalculator_Add_OutputMessage" />
</wsdl:operation>
<wsdl:operation name="Subtract">
<wsdl:input wsaw:Action="https://Example.org/ICalculator/Subtract" message="tns:ICalculator_Subtract_InputMessage" />
<wsdl:output wsaw:Action="https://Example.org/ICalculator/SubtractResponse" message="tns:ICalculator_Subtract_OutputMessage" />
</wsdl:operation>
</wsdl:portType>
<wsdl:binding name="DefaultBinding_ICalculator" type="tns:ICalculator">
<soap:binding transport="https://schemas.xmlsoap.org/soap/http" />
<wsdl:operation name="Add">
<soap:operation soapAction="https://Example.org/ICalculator/Add" style="document" />
<wsdl:input>
<soap:body use="literal" />
</wsdl:input>
<wsdl:output>
<soap:body use="literal" />
</wsdl:output>
</wsdl:operation>
<wsdl:operation name="Subtract">
<soap:operation soapAction="https://Example.org/ICalculator/Subtract" style="document" />
<wsdl:input>
<soap:body use="literal" />
</wsdl:input>
<wsdl:output>
<soap:body use="literal" />
</wsdl:output>
</wsdl:operation>
</wsdl:binding>
<wsdl:service name="CalculatorService">
<wsdl:port name="ICalculator" binding="tns:DefaultBinding_ICalculator">
<soap:address location="https://Example.org/ICalculator" />
</wsdl:port> 
</wsdl:service>
</wsdl:definitions>`;

//
// const xmlEscapeDefault = `<wsdl:message name="ICalculator_Add_InputMessage"><wsdl:part name="parameters" element="tns:Add" /></wsdl:message>`;
// const XmlEscape = () => {
//     const [rawXml, setRawXml] = useState(xmlEscapeDefault);
//     const escaped = xmlEscape(rawXml);
//
//     return (
//         <VerticalSplit>
//             <Column>
//                 <CopyMe>
//                     <textarea
//                         className="text-area"
//                         value={rawXml}
//                         onChange={(event) => setRawXml(event.target.value)}
//                     />
//                 </CopyMe>
//             </Column>
//             <Column>
//                 <Highlight lang="xml">{escaped}</Highlight>
//             </Column>
//         </VerticalSplit>
//     );
// };
//
// const unescapeXmlDefault =
//     '&lt;wsdl:message name=&quot;ICalculator_Add_InputMessage&quot;&gt;&lt;wsdl:part name=&quot;parameters&quot; element=&quot;tns:Add&quot; /&gt;&lt;/wsdl:message&gt;';
// const XmlUnescape = () => {
//     const [rawXml, setRawXml] = useState(unescapeXmlDefault);
//     const {pretty, error} = xmlUnescape(rawXml);
//
//     return (
//         <VerticalSplit>
//             <Column>
//                 <CopyMe>
//                     <textarea
//                         className="text-area"
//                         value={rawXml}
//                         onChange={(event) => setRawXml(event.target.value)}
//                     />
//                 </CopyMe>
//             </Column>
//             <Column>
//                 {error ? (
//                     <Error message="Invalid XML"/>
//                 ) : (
//                     <Highlight lang="xml">{pretty}</Highlight>
//                 )}
//             </Column>
//         </VerticalSplit>
//     );
// };

const FormattedXml = () => {
    const [rawXml, setRawXml] = useState(defaultXml);

    return (
        <InputPreviewPane
            lang={'xml'}
            rawValue={rawXml}
            setRawValue={setRawXml}
        />
    );
};

export default FormattedXml;
