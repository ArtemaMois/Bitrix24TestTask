{"version":3,"file":"extension.map.js","names":["jn","define","require","exports","module","Duration","roundTimeInSeconds","timeInSeconds","duration","createFromSeconds","seconds","getUnitPropertyModByFormat","minutes","hours","days","months","years","elderRank","findElderRank","s","i","H","d","m","Y","roundedTime","rank","value","roundUpTimeInSeconds","roundSeconds","remainder","formatRoundedTime","lengthFormats","getLengthFormat","YEAR","MONTH","DAY","HOUR","MINUTE","SECOND","format","calculateSum","times","sum","forEach","time","milliseconds"],"sources":["extension.js"],"mappings":"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"}