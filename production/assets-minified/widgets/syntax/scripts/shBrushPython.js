!function(){function a(){this.regexList=[{regex:SyntaxHighlighter.regexLib.singleLinePerlComments,css:"comments"},{regex:/^\s*@\w+/gm,css:"decorator"},{regex:/(['\"]{3})([^\1])*?\1/gm,css:"comments"},{regex:/"(?!")(?:\.|\\\"|[^\""\n])*"/gm,css:"string"},{regex:/'(?!')(?:\.|(\\\')|[^\''\n])*'/gm,css:"string"},{regex:/\+|\-|\*|\/|\%|=|==/gm,css:"keyword"},{regex:/\b\d+\.?\w*/g,css:"value"},{regex:new RegExp(this.getKeywords("__import__ abs all any apply basestring bin bool buffer callable chr classmethod cmp coerce compile complex delattr dict dir divmod enumerate eval execfile file filter float format frozenset getattr globals hasattr hash help hex id input int intern isinstance issubclass iter len list locals long map max min next object oct open ord pow print property range raw_input reduce reload repr reversed round set setattr slice sorted staticmethod str sum super tuple type type unichr unicode vars xrange zip"),"gmi"),css:"functions"},{regex:new RegExp(this.getKeywords("and assert break class continue def del elif else except exec finally for from global if import in is lambda not or pass print raise return try yield while"),"gm"),css:"keyword"},{regex:new RegExp(this.getKeywords("None True False self cls class_"),"gm"),css:"color1"}],this.forHtmlScript(SyntaxHighlighter.regexLib.aspScriptTags)}"undefined"!=typeof require&&(SyntaxHighlighter=require("shCore").SyntaxHighlighter),a.prototype=new SyntaxHighlighter.Highlighter,a.aliases=["py","python"],SyntaxHighlighter.brushes.Python=a,"undefined"!=typeof exports&&(exports.Brush=a)}();