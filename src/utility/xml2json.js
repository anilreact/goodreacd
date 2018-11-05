class Xml2Json{
	
	xmltoJson(XML){
		
		const allNodes = new Array(...XML.children);
		const jsonData = {};
		allNodes.forEach(node => {
		  if (node.children.length) {
			jsonData[node.nodeName] = this.xmltoJson(node);
		  } else {
			jsonData[node.nodeName] = node.innerHTML;
		  }
		});
		return jsonData;
	}
	
	readXmlData(xmlData){
		
		const XML = this.Xmlparser(xmlData);
		const XMLnode = new Array(...XML.getElementsByTagName("work"));
		const searchData = XMLnode.map(searchData => this.xmltoJson(searchData));
		return searchData;
	}
	
Xmlparser(xmlData){

	const parser = new DOMParser();
	const XMLDOM = parser.parseFromString(xmlData, "application/xml");
	const parseError = XMLDOM.getElementsByTagName("parsererror");
	if (parseError.length) {
		console.log("xml error api found.")
	}
	return XMLDOM;
}

}

export default Xml2Json;