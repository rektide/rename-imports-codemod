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
	  replaced= imports.replaceWith( i=> {
		var output= sourceTransform( i.value.source.value)
		if( output){
			i.value.source.value= output
		}
		return i
	  })
	  transformedSource= replaced.toSource()
	return transformedSource
}
