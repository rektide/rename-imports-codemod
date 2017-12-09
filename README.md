# Rename imports Codeshift

> Search and replace static import statements Codeshift transformer

This jscodeshift codemod/transform replaces import source text.

It was created specifically to deal with private repositories- their `@name` is not a valid module name.

However this tool also can be useful for generating creating mounting of libraries.

A [fork of cjs-to-es6](https://github.com/rektide/cjs-to-es6) has this codemod builtin. Pass a `--renameImportSource=^@(.*)/_$1/` arument to the run to run your own rename, or let it default to that search & replace.
