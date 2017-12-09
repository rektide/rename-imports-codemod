/**
* rename-imports - Rename an import declaration's source via a given search-replace
*/

import perls from "perls"

export default function( file, api, options){
	var
	  sourceTransformText= options.renameImportSource,
	  sourceTransform= perls`${sourceTransformText}`,
	  j= api.jscodeshift,
	  root= j( file.source),
	  imports= root.find( j.ImportDeclaration),
	  replaced= imports.replaceWith( nodePath=> {
		var node= nodePath.node
		console.log({node})
		var output= sourceTransform( node.source.value)
		if( output){
			node.source.value= output
		}
		return node
	  }),
	  transformedSource= replaced.toSource()
	return transformedSource
}
