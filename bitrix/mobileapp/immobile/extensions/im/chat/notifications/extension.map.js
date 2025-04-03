{"version":3,"sources":["extension.js"],"names":["styles","listView","backgroundColor","flex","this","NewNotificationsComponent","LayoutComponent","constructor","props","super","userId","parseInt","BX","componentParameters","get","largeTitle","storage","Application","sharedStorage","perPage","initialDataReceived","users","notificationsToRead","Set","tempNotificationsToRead","lastId","lastType","Const","NotificationTypes","confirm","isLoadingNewPage","notificationsToDelete","firstUnreadNotificationOnInit","state","total","unreadCounter","collection","isRefreshing","readNotificationsQueue","initPullHandler","PULL","subscribe","ImMobileNotificationsPullHandler","application","addCustomEvent","params","emit","type","PullClient","SubscriptionType","Server","moduleId","data","command","storedEvents","length","sort","Utils","sortByType","slice","setTimeout","filter","event","onCustomEvent","componentDidMount","rawCachedNotifications","hasCachedNotifications","layoutWidget","setTitle","text","message","useProgress","largeMode","getInitialData","drawPlaceholders","then","onViewLoaded","getInitialStateFromServer","console","log","setState","catch","error","readVisibleNotificationsDelayed","ChatUtils","debounce","readVisibleNotifications","placeholders","generatePlaceholders","Promise","resolve","reject","amount","i","push","key","commonType","placeholder","readAll","needToUpdate","newCounter","collectionReaded","map","item","notifyRead","postComponentEvent","dialogId","counter","id","action","itemClickHandler","originalCounterBeforeUpdate","deleteItemIndex","findIndex","messageId","filteredNotifications","set","JSON","stringify","ChatTimer","stop","start","idsToDelete","rest","callMethod","res","onItemHeightChange","fromHeight","toHeight","scrollBy","x","y","animated","duration","render","isStub","View","renderStub","renderList","Image","style","width","height","alignSelf","uri","currentDomain","Text","color","fontSize","textAlign","ListView","ref","items","renderItem","section","index","NotificationItem","notification","bind","onHeightWillChange","onRemove","deleteRow","onRefresh","Object","assign","showError","onLoadMore","getRemainingPages","loadNextPage","onViewableItemsChanged","messagesToRead","forEach","itemIndex","undefined","add","viewabilityConfig","itemVisiblePercentThreshold","waitForInteraction","queryParams","LIMIT","LAST_ID","LAST_TYPE","BB_CODE","newItems","processNextPage","getInitialStateFromCache","clear","getFirstUnreadNotificationOnInit","cachedNotifications","parse","result","initialState","processInitialState","getLastItemId","notifications","getLastItemType","user","notificationsFromServer","preparedItemItem","prepareNotification","has","total_count","total_unread_count","preparedItems","getListItemType","getItemType","author","author_id","name","avatarUrl","avatar","avatarColor","htmlspecialcharsback","time","Date","date","getTime","buttons","notify_buttons","chatId","chat_id","notify_read","notifyTag","notify_tag","notify_type","simple","Math","ceil","size","notificationId","readNotification","counterValueAfterRead","idsToRead","canReadFromId","max","readFromId","min","join","ids","unreadId","maxNotificationIndex"],"mappings":"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","file":"extension.map.js"}