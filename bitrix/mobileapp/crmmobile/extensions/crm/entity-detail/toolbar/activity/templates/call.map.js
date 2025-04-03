{"version":3,"sources":["call.js"],"names":["jn","define","require","exports","module","ActivityPinnedBase","EventEmitter","throttle","debounce","transition","chain","Haptics","MARKER_SIZE","nothing","ActivityPinnedCall","render","View","style","flexDirection","flex","top","position","width","ref","this","interactable","clickable","ActivityPinnedCallWrapper","props","clientName","model","getClientName","wrapperRef","state","visible","bottom","left","height","onPan","onTouchesBegan","x","actionParams","duration","onTouchesMoved","onTouchesEnded","show","animation","open","option","start","Promise","resolve","setState","LayoutComponent","constructor","super","uids","speed","currentTime","getPositionByValue","play","isTouchEnd","currentTimeWidth","isEventsBinded","updatePosition","getValueByPosition","freezeTouchEnd","value","enableToUpdateCurrentTime","BX","prop","getBoolean","componentDidMount","onUpdateAudioPlayer","bind","onPlayAudio","onPauseAudio","onFinishAudio","onChangeSpeed","uid","customEventEmitter","createWithUid","bindPlayerEvents","componentWillReceiveProps","removePlayerEvents","setUid","on","off","setTimeout","convertSecondsToTime","totalSeconds","padTo2Digits","num","toString","padStart","minutes","Math","floor","seconds","device","screen","setPosition","max","min","onLayout","progressWidth","backgroundColor","paddingHorizontal","paddingVertical","justifyContent","borderBottomWidth","borderBottomColor","renderPlayButton","renderTrackInfo","renderButtons","renderProgressBar","Image","onClick","onPlay","svg","content","icons","pause","impactLight","emit","Text","color","fontSize","numberOfLines","ellipsize","text","textAlign","alignItems","renderSpeedButton","renderBackButton","renderFrontButton","renderCancelButton","marginRight","marginLeft","menu","ContextMenu","actions","getSpeedMenuActions","params","title","message","toFixed","setPlayerSeek","back","front","onHide","cancel","Object","keys","map","item","getMenuAction","id","String","onClickCallback","parseFloat","isSelected","markerSize","leftOffsetByPosition","renderMarker","markerOffset","Application","getPlatform","borderRadius","Shadow","offset","y","radius","round","ceil"],"mappings":"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","file":"call.map.js"}