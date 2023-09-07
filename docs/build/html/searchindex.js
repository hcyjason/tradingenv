Search.setIndex({docnames:["changelog","index","modules","readme","tradingenv","tradingenv.broker"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["changelog.rst","index.rst","modules.rst","readme.rst","tradingenv.rst","tradingenv.broker.rst"],objects:{"":[[4,0,0,"-","tradingenv"]],"tradingenv.broker":[[5,0,0,"-","allocation"],[5,0,0,"-","broker"],[5,0,0,"-","fees"],[5,0,0,"-","rebalancing"],[5,0,0,"-","track_record"],[5,0,0,"-","trade"]],"tradingenv.broker.allocation":[[5,1,1,"","NrContracts"],[5,1,1,"","Weights"]],"tradingenv.broker.broker":[[5,1,1,"","Broker"],[5,1,1,"","Context"],[5,5,1,"","EndOfEpisodeError"]],"tradingenv.broker.broker.Broker":[[5,2,1,"","_holdings_margins"],[5,2,1,"","_holdings_quantity"],[5,3,1,"","accrued_interest"],[5,3,1,"","context"],[5,4,1,"","holdings_margins"],[5,4,1,"","holdings_quantity"],[5,3,1,"","holdings_values"],[5,3,1,"","holdings_weights"],[5,3,1,"","marking_to_market"],[5,3,1,"","net_liquidation_value"],[5,3,1,"","rebalance"],[5,2,1,"","track_record"],[5,3,1,"","transact"]],"tradingenv.broker.fees":[[5,1,1,"","BrokerFees"],[5,1,1,"","IBrokerFees"],[5,1,1,"","InteractiveBrokersFees"]],"tradingenv.broker.fees.BrokerFees":[[5,3,1,"","commissions"]],"tradingenv.broker.fees.IBrokerFees":[[5,3,1,"","commissions"]],"tradingenv.broker.fees.InteractiveBrokersFees":[[5,3,1,"","commissions"]],"tradingenv.broker.rebalancing":[[5,1,1,"","Rebalancing"]],"tradingenv.broker.rebalancing.Rebalancing":[[5,3,1,"","make_trades"]],"tradingenv.broker.track_record":[[5,1,1,"","TrackRecord"],[5,1,1,"","TrackRecordComparison"]],"tradingenv.broker.track_record.TrackRecord":[[5,3,1,"","cost_of_commissions"],[5,3,1,"","cost_of_spread"],[5,3,1,"","fig_annual_returns"],[5,3,1,"","fig_capital_asset_pricing_model"],[5,3,1,"","fig_drawdown"],[5,3,1,"","fig_historical_portfolio_weights_actual"],[5,3,1,"","fig_historical_portfolio_weights_diff"],[5,3,1,"","fig_historical_portfolio_weights_target"],[5,3,1,"","fig_net_liquidation_value"],[5,3,1,"","fig_returns_distribution"],[5,3,1,"","fig_transaction_costs"],[5,3,1,"","load"],[5,3,1,"","net_liquidation_value"],[5,3,1,"","save"],[5,3,1,"","to_excel"],[5,3,1,"","transaction_costs"],[5,3,1,"","weights_actual"],[5,3,1,"","weights_target"]],"tradingenv.broker.track_record.TrackRecordComparison":[[5,3,1,"","fig_net_liquidation_value"]],"tradingenv.broker.trade":[[5,1,1,"","Trade"]],"tradingenv.broker.trade.Trade":[[5,2,1,"id0","acq_price"],[5,2,1,"","ask_price"],[5,2,1,"","bid_price"],[5,2,1,"","contract"],[5,2,1,"id1","cost_of_cash"],[5,2,1,"id2","cost_of_commissions"],[5,2,1,"","cost_of_spread"],[5,2,1,"","notional"],[5,2,1,"","quantity"],[5,2,1,"","time"]],"tradingenv.contracts":[[4,1,1,"","AbstractContract"],[4,1,1,"","Cash"],[4,1,1,"","ES"],[4,1,1,"","ETF"],[4,1,1,"","Future"],[4,1,1,"","FutureChain"],[4,1,1,"","Index"],[4,1,1,"","NK"],[4,1,1,"","Rate"],[4,1,1,"","VX"],[4,1,1,"","ZB"],[4,1,1,"","ZF"],[4,1,1,"","ZN"],[4,1,1,"","ZQ"],[4,1,1,"","ZT"]],"tradingenv.contracts.AbstractContract":[[4,4,1,"","cash_requirement"],[4,3,1,"","make_events"],[4,4,1,"","margin_requirement"],[4,4,1,"","multiplier"],[4,2,1,"id0","now"],[4,3,1,"","size"],[4,3,1,"","static_hashing"],[4,4,1,"","symbol"],[4,4,1,"","symbol_short"],[4,4,1,"","underlyings"],[4,3,1,"","verify"]],"tradingenv.contracts.Cash":[[4,2,1,"","cash_requirement"],[4,2,1,"","margin_requirement"],[4,2,1,"","multiplier"],[4,4,1,"","symbol"]],"tradingenv.contracts.ES":[[4,2,1,"","exists_since"],[4,2,1,"","freq"],[4,4,1,"","margin_requirement"],[4,2,1,"","multiplier"]],"tradingenv.contracts.ETF":[[4,2,1,"","cash_requirement"],[4,2,1,"","margin_requirement"],[4,2,1,"","multiplier"],[4,4,1,"","symbol"]],"tradingenv.contracts.Future":[[4,2,1,"","cash_requirement"],[4,2,1,"","exists_since"],[4,2,1,"","exists_until"],[4,4,1,"","freq"],[4,3,1,"","lifespan"],[4,3,1,"","make_events"],[4,4,1,"","margin_requirement"],[4,2,1,"","month_codes"],[4,4,1,"","symbol"],[4,4,1,"","symbol_short"]],"tradingenv.contracts.FutureChain":[[4,2,1,"","cash_requirement"],[4,3,1,"","lead_contract"],[4,3,1,"","lifespan"],[4,3,1,"","make_events"],[4,4,1,"","margin_requirement"],[4,4,1,"","multiplier"],[4,3,1,"","static_hashing"],[4,4,1,"","symbol"],[4,4,1,"","symbol_short"],[4,4,1,"","underlyings"]],"tradingenv.contracts.Index":[[4,2,1,"","cash_requirement"],[4,2,1,"","margin_requirement"],[4,2,1,"","multiplier"],[4,4,1,"","symbol"]],"tradingenv.contracts.NK":[[4,2,1,"","exists_since"],[4,2,1,"","freq"],[4,4,1,"","margin_requirement"],[4,2,1,"","multiplier"]],"tradingenv.contracts.Rate":[[4,2,1,"","cash_requirement"],[4,2,1,"","margin_requirement"],[4,2,1,"","multiplier"],[4,4,1,"","symbol"],[4,3,1,"","verify"]],"tradingenv.contracts.VX":[[4,2,1,"","exists_since"],[4,2,1,"","freq"],[4,4,1,"","margin_requirement"],[4,2,1,"","multiplier"]],"tradingenv.contracts.ZB":[[4,2,1,"","margin_requirement"],[4,2,1,"","multiplier"]],"tradingenv.contracts.ZF":[[4,2,1,"","margin_requirement"],[4,2,1,"","multiplier"]],"tradingenv.contracts.ZN":[[4,2,1,"","margin_requirement"],[4,2,1,"","multiplier"]],"tradingenv.contracts.ZQ":[[4,2,1,"","margin_requirement"],[4,2,1,"","multiplier"]],"tradingenv.contracts.ZT":[[4,2,1,"","margin_requirement"],[4,2,1,"","multiplier"]],"tradingenv.events":[[4,1,1,"","EventContractDiscontinued"],[4,1,1,"","EventDone"],[4,1,1,"","EventNBBO"],[4,1,1,"","EventNewDate"],[4,1,1,"","EventReset"],[4,1,1,"","EventStep"],[4,1,1,"","IEvent"],[4,1,1,"","Observer"]],"tradingenv.events.EventNBBO":[[4,2,1,"","ask_price"],[4,2,1,"","ask_size"],[4,2,1,"","bid_price"],[4,2,1,"","bid_size"],[4,2,1,"","contract"],[4,2,1,"","time"]],"tradingenv.events.IEvent":[[4,3,1,"","notify"],[4,2,1,"id1","time"]],"tradingenv.events.Observer":[[4,2,1,"","_observed_events"],[4,3,1,"","reset"]],"tradingenv.exchange":[[4,1,1,"","Exchange"],[4,1,1,"","LimitOrderBook"]],"tradingenv.exchange.Exchange":[[4,2,1,"","_books"],[4,3,1,"","acq_prices"],[4,3,1,"","ask_prices"],[4,3,1,"","bid_prices"],[4,3,1,"","liq_prices"],[4,3,1,"","mid_prices"],[4,3,1,"","process_EventContractDiscontinued"],[4,3,1,"","process_EventNBBO"],[4,3,1,"","spreads"],[4,3,1,"","to_frame"]],"tradingenv.exchange.LimitOrderBook":[[4,3,1,"","acq_price"],[4,3,1,"","liq_price"],[4,4,1,"","mid_price"],[4,4,1,"","spread"],[4,3,1,"","terminate"],[4,3,1,"","to_frame"],[4,3,1,"","update"]],"tradingenv.features":[[4,1,1,"","Feature"]],"tradingenv.features.Feature":[[4,2,1,"id2","action_space"],[4,2,1,"id3","broker"],[4,2,1,"id4","exchange"],[4,3,1,"","fit_transformer"],[4,3,1,"","parse"],[4,3,1,"","reset"]],"tradingenv.metrics":[[4,6,1,"","to_pandas"]],"tradingenv.policy":[[4,1,1,"","AbstractPolicy"],[4,1,1,"","RandomPolicy"],[4,6,1,"","make_policy"]],"tradingenv.policy.AbstractPolicy":[[4,3,1,"","act"],[4,2,1,"","action_space"],[4,2,1,"","observation_space"]],"tradingenv.policy.RandomPolicy":[[4,3,1,"","act"]],"tradingenv.rewards":[[4,1,1,"","AbstractReward"],[4,1,1,"","RewardDifferentialSharpeRatio"],[4,1,1,"","RewardLogReturn"],[4,1,1,"","RewardPnL"],[4,1,1,"","RewardSimpleReturn"],[4,6,1,"","make_reward"]],"tradingenv.rewards.AbstractReward":[[4,3,1,"","calculate"],[4,3,1,"","reset"]],"tradingenv.rewards.RewardDifferentialSharpeRatio":[[4,3,1,"","calculate"]],"tradingenv.rewards.RewardLogReturn":[[4,3,1,"","calculate"]],"tradingenv.rewards.RewardPnL":[[4,3,1,"","calculate"]],"tradingenv.rewards.RewardSimpleReturn":[[4,3,1,"","calculate"]],"tradingenv.state":[[4,1,1,"","IState"],[4,6,1,"","cache"]],"tradingenv.state.IState":[[4,3,1,"","parse"],[4,3,1,"","reset"],[4,2,1,"","space"]],"tradingenv.transmitter":[[4,1,1,"","AbstractTransmitter"],[4,1,1,"","AsynchronousTransmitter"],[4,1,1,"","Folds"],[4,1,1,"","PartitionTimeRanges"],[4,1,1,"","Transmitter"]],"tradingenv.transmitter.AbstractTransmitter":[[4,3,1,"","add_events"]],"tradingenv.transmitter.AsynchronousTransmitter":[[4,3,1,"","add_events"]],"tradingenv.transmitter.Folds":[[4,3,1,"","as_time"]],"tradingenv.transmitter.PartitionTimeRanges":[[4,3,1,"","verify_overlaps"],[4,3,1,"","verify_start_before_end"]],"tradingenv.transmitter.Transmitter":[[4,3,1,"","add_custom_events"],[4,3,1,"","add_events"],[4,3,1,"","add_prices"],[4,3,1,"","add_timesteps"],[4,2,1,"","events"],[4,2,1,"","timesteps"],[4,3,1,"","walk_forward"]],tradingenv:[[5,0,0,"-","broker"],[4,0,0,"-","contracts"],[4,0,0,"-","env"],[4,0,0,"-","events"],[4,0,0,"-","exchange"],[4,0,0,"-","features"],[4,0,0,"-","metrics"],[4,0,0,"-","policy"],[4,0,0,"-","rewards"],[4,0,0,"-","spaces"],[4,0,0,"-","state"],[4,0,0,"-","transmitter"]]},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","property","Python property"],"5":["py","exception","Python exception"],"6":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:property","5":"py:exception","6":"py:function"},terms:{"0":[4,5],"001":4,"004":4,"01":[4,5],"02":[4,5],"03":[4,5],"05":4,"07":[4,5],"09":4,"1":[4,5],"10":4,"100":[4,5],"1000":4,"101":4,"1092531":4,"11":4,"12":4,"140300342393776":4,"140300342646128":5,"140300342646224":[4,5],"140300342648480":4,"140300342648576":4,"140300342648672":4,"140300342648960":4,"140300342649392":4,"140300342649440":4,"140300342650304":4,"140300342652800":4,"15":5,"1551":4,"1567":4,"1590":5,"1990":4,"1997":4,"1e":5,"2":[4,5],"20":[4,5],"200":4,"2000":4,"2004":4,"2018":4,"2019":4,"202019":4,"2024":4,"20fact":4,"20info":4,"20sheet":4,"21":5,"2222":4,"225":4,"24617244":4,"26":4,"26662":4,"28":4,"2nd":4,"3":[1,3,4,5],"345561869":4,"37969":4,"4":[4,5],"4167":4,"5":4,"50":4,"500":4,"6":4,"7":4,"7677636":4,"8":[1,3,4],"9":4,"97":5,"99":4,"9xkvby":4,"abstract":[4,5],"case":[1,3,4,5],"class":[1,3,4,5],"default":[4,5],"export":5,"float":[4,5],"function":4,"import":4,"int":4,"long":[4,5],"new":4,"return":[4,5],"short":[4,5],"static":4,"true":[4,5],"try":4,"while":4,A:[1,3,4,5],AND:5,By:[4,5],For:[4,5],If:[4,5],In:5,It:[4,5],NOT:4,No:[4,5],OR:[4,5],The:[1,3,4,5],There:4,These:4,To:[1,3,5],__class__:4,__init__:4,_alloc:5,_book:4,_create_partit:4,_holdings_margin:5,_holdings_quant:5,_make_rebalancing_request:5,_manual_fit_transform:4,_margin:[4,5],_name:4,_next:4,_observed_ev:4,_rebalanc:5,_reset:4,_treasuri:4,abc:[4,5],about:4,absenc:4,absolut:5,abstractbrokerfe:5,abstractclass:4,abstractcontract:[4,5],abstractpolici:4,abstractreward:4,abstracttransmitt:4,access:4,accordingli:[4,5],account:[4,5],accru:5,accrued_interest:5,accumul:4,acq_pric:[4,5],acquisit:5,across:[4,5],act:4,action:4,action_spac:4,actual:5,ad:4,add:4,add_custom_ev:4,add_ev:4,add_pric:4,add_timestep:4,after:4,against:4,agent:[1,3,4],aggreg:4,aggregate_future_chain:5,agnost:[1,3],ahead:4,algorithm:[1,3],algotrad:4,all:[1,3,4,5],alloc:[2,4],allow:[4,5],also:[4,5],altern:[1,3,4],amount:5,an:[1,3,4,5],ani:[4,5],annual:5,anyth:5,apidoc:[1,3],appli:[4,5],applic:4,appropri:4,approxim:4,ar:[4,5],arbitrari:4,arg:4,argument:[4,5],arrai:[4,5],articl:4,as_tim:4,ask:[1,3,4,5],ask_pric:[4,5],ask_siz:4,asset:[4,5],associ:[4,5],assum:[1,3,4,5],assumpt:[4,5],asynchronoustransmitt:4,attempt:4,attribut:4,attributeerror:4,automat:4,avail:4,averag:5,avg_pric:5,avoid:5,b:4,backtest:[1,3,4],backtrad:[1,3],bad:4,base:[4,5],base_curr:5,baselines3:[1,3],basic:5,basis_naive_tm1:4,batch:4,becaus:[4,5],becom:4,been:4,befor:[4,5],before_rebalanc:5,behaviour:4,being:4,belong:4,below:[4,5],best:4,between:[4,5],bia:4,bid:[1,3,4,5],bid_pric:[4,5],bid_siz:4,big:4,blank:5,bond:4,book:[4,5],bool:[4,5],borrow:5,broker:[1,2,3,4],broker_fe:5,brokerag:5,brokerfe:5,btgym:[1,3],buck:4,bug:4,bui:[4,5],build:[1,3],built:[1,3],burn:5,busi:4,cach:4,cagr:5,calcul:[4,5],call:[4,5],callabl:4,callback:4,can:[1,3,4],cannot:5,care:4,cash:[4,5],cash_requir:4,cboe:4,cc:4,cd:[1,3],certainli:4,cfe:4,chain:4,chang:[4,5],characterist:4,charg:5,check:4,check_everi:4,check_on_start:4,checkpoint:5,child:4,choic:5,chronolog:4,cl:4,classmethod:5,clean:[1,3],clear:[4,5],client:4,close:[1,3],cmd:[1,3],cmegroup:[4,5],code:[4,5],collect:4,column:4,com:[4,5],come:4,command:[1,3],comment:4,commis:5,commiss:[1,3,4,5],common:4,compar:[1,3,4],compat:[1,3,4],composit:4,compound:5,comprehens:[1,3],comput:[4,5],concern:5,concret:[4,5],condit:5,confus:4,conid:4,conjunct:[1,3],conserv:5,constant:4,construct:5,contain:4,content:2,context:5,continu:4,contract:[2,5],contract_id:4,contract_info:4,conveni:4,convert:4,copi:4,core:[4,5],correspond:[4,5],cost:[1,3,5],cost_of_cash:5,cost_of_commiss:5,cost_of_spread:5,could:4,cours:5,creat:4,cstool:4,cumprod:4,cumul:5,currenc:[4,5],current:[1,3,4,5],custom:4,dai:4,daili:[1,3],data:[1,3,4],datafram:[4,5],dataset:4,date:[4,5],date_rang:4,datetim:[4,5],de:5,deal:5,debug:4,dec:4,decim:5,decor:4,decoupl:4,deduc:4,deepcopi:4,def:4,defin:4,definit:4,deliv:4,denot:5,depend:[1,3,5],deploi:4,deposit:[1,3,4,5],deriv:[4,5],design:[1,3,4,5],desir:[4,5],detail:[4,5],determin:5,determinist:4,df:4,dict:[4,5],dictionari:[4,5],differ:[4,5],differenti:4,dir:4,directori:[1,3,5],discard:[4,5],divid:5,doc:[1,3],docstr:4,document:[1,3],doe:[4,5],doesn:4,dollar_contract_specif:4,don:[4,5],done:4,download:4,drive:[1,3],driven:[1,3,4],dtype:4,dure:[4,5],dynam:4,e:[4,5],each:[4,5],earn:5,easier:5,easiest:4,econom:[1,3],educ:5,effect:5,either:[1,3,4,5],eleg:4,element:5,els:[4,5],emini:4,en:[4,5],end:[4,5],endofepisodeerror:5,entri:[1,3,5],env:2,environ:[1,3,4],environemtn:4,episod:[4,5],epsilon:5,equal:4,equiti:4,equityindic:4,error:[4,5],es:4,esm18:4,esu18:4,esu19:4,esz19:4,etc:4,etf:[1,3,4,5],eur:4,even:4,event:[1,2,3],event_class:4,eventcontractdiscontinu:4,eventdon:4,eventnbbo:4,eventnewd:4,eventreset:4,events_batch_0:4,events_batch_1:4,eventstep:4,eventtyp:4,everi:[4,5],exactli:4,exampl:[1,3,4,5],excel:5,except:[4,5],exch:4,exchang:[2,5],exclud:4,execut:[4,5],exist:4,exists_sinc:4,exists_until:4,expand:4,expans:4,expect:4,experi:[1,3],expir:4,expiri:4,explicit:4,explicitli:5,express:5,extend:4,extent:5,extra:[1,3],f:[1,3,4,5],fact:4,fals:[4,5],fast:[1,3],featur:2,fed:[4,5],federico:4,fee:[2,4],fig_annual_return:5,fig_capital_asset_pricing_model:5,fig_drawdown:5,fig_historical_portfolio_weights_actu:5,fig_historical_portfolio_weights_diff:5,fig_historical_portfolio_weights_target:5,fig_net_liquidation_valu:5,fig_returns_distribut:5,fig_transaction_cost:5,figur:5,file:4,financi:[1,3,5],finish:4,first:4,fit:4,fit_transform:4,fix:[1,3,5],flow:5,fold:4,fold_nam:4,folder:[1,3],follow:[1,3,4],form:4,former:4,found:4,fraction:5,frame:4,framework:[1,3],freq:4,frequenc:[1,3,4],fridai:4,from:[4,5],full:4,fulli:5,fund:[4,5],further:4,futgrp:4,futur:[1,3,4,5],future_cl:4,futurechain:4,g:[4,5],gener:[4,5],get:4,give:4,given:5,goe:5,good:[4,5],graph_obj:5,greater:[4,5],group_futur:5,growth:5,guarante:4,gui:5,gym:[1,3,4],h:4,ha:[4,5],handi:[4,5],handl:4,happen:4,harder:4,hash:4,hashabl:4,have:4,headlin:4,held:5,hello:4,here:4,high:[4,5],histor:[4,5],histori:4,hold:[4,5],holdings_margin:5,holdings_quant:5,holdings_valu:5,holdings_weight:5,home:4,hous:5,how:[4,5],how_to_calculate_differential_sharpe_ratio:4,howev:4,html:[1,3,4,5],http:[4,5],i:[4,5],ib:4,ibrokerfe:5,id:[4,5],idea:4,identifi:4,idl:5,ief:4,ievent:4,ignor:5,imbal:5,impact:5,implement:[1,3,4,5],includ:[1,3,5],increas:4,index:[1,4,5],index_nam:5,indic:4,industri:[1,3],inf:[4,5],info:4,inform:4,inherit:4,initi:[4,5],initialis:4,input:4,inspir:4,instanc:[4,5],instead:4,instruct:[1,3,5],instrument:[1,3,5],integr:[1,3],interact:[4,5],interactivebrok:[4,5],interactivebrokersfe:5,interest:[1,3,4,5],interest_r:5,interfac:4,intern:4,interv:4,introduc:4,introduct:5,invest:[4,5],irregularli:[1,3],isinst:4,isn:4,istat:4,item:4,iter:4,its:[1,3,4,5],j:4,join:4,just:4,k:4,keep:[4,5],kei:[4,5],keyword:4,kind:[4,5],know:[4,5],kwarg:4,lang:4,last:[4,5],latenc:[1,3],latest:[1,3,4],latter:5,lead:[4,5],lead_contract:4,leadingcontract:4,learn:[1,3,4],least:5,left:4,less:[4,5],lesson:4,level:4,leverag:[1,3,5],librari:[1,2,3],lifespan:4,limit:[4,5],limitorderbook:4,line:[1,3],liq_pric:4,liquid:[4,5],list:[4,5],load:5,loan:5,lob:4,log:4,logi:5,logic:[4,5],longer:4,look:4,loss:4,lot:5,low:4,m1:4,m:4,machin:4,magic:4,mai:4,mainten:4,make:[1,3,4,5],make_ev:4,make_polici:4,make_reward:4,make_trad:5,manag:4,mani:5,manipul:4,map:[4,5],margin:[4,5],margin_requir:4,mark:5,market:[1,3,4,5],marking_to_market:5,markov_reset:4,markup:5,mean:[1,3,4,5],measur:5,mechan:4,media:4,member:4,method:[4,5],metric:2,micro:4,mid:4,mid_pric:4,middl:4,might:[4,5],misc:4,mock:[4,5],modul:[1,2],monoton:4,month:4,month_cod:4,monthli:[1,3],more:[4,5],ms:4,multipli:[4,5],must:[4,5],n:4,name:[4,5],nan:4,nasdaq:4,nasti:4,nation:4,natur:4,nbbo:4,nbbo_nasdaq:4,nbbo_sp500:4,ndarrai:4,ndframe:4,need:[4,5],neg:5,net:[4,5],net_liquidation_valu:5,neutral:4,newer:[1,3],newssenti:4,next:4,nikkei:4,nip:4,nk:4,nlv:5,non:[4,5],none:[4,5],nor:5,normal:4,note:[4,5],notebook:[1,3],notifi:4,notion:[4,5],now:[4,5],np:[4,5],nr:[4,5],nr_contract:5,nrcontract:5,number:[1,3,4,5],numer:5,numpi:[1,3],o:[1,3],object:[4,5],observ:4,observation_spac:4,observed_ev:4,occur:4,oct:4,offer:4,offset:5,oldest:4,onc:4,one:4,onli:[1,3,4,5],onlin:4,open:[1,3],openai:[1,3,4],optim:4,option:[1,3,4,5],order:[4,5],origin:4,other:[4,5],outer:4,output:4,over:5,overlap:4,overrid:4,ow:5,own:4,p:4,packag:[2,3],page:1,pai:5,paid:[4,5],pair:4,panda:4,paper:4,paramet:[4,5],pars:4,partit:4,partitiontimerang:4,pass:[4,5],past:4,path:5,pattern:4,pd:4,pdf:4,perform:[4,5],period:4,php:[4,5],physic:4,pip:[1,3],pnl:4,point:[1,3,5],polici:2,popular:[1,3],portfolio:[4,5],portfoliospac:[4,5],portion:4,posit:[4,5],post:5,post_rebalanc:5,practic:5,pre:[4,5],prefer:4,preprocess:4,presenc:5,presum:4,previou:4,previous:[4,5],price:[1,3,4,5],principl:[1,3,5],privat:5,probabl:4,problem:5,problemat:4,procedur:4,process:[4,5],process_:4,process_eventcontractdiscontinu:4,process_eventnbbo:4,product:[4,5],productbuff:4,profit:[4,5],propag:4,properti:[4,5],proport:[1,3,4,5],provid:[1,3,4,5],py:4,pytest:[1,3],python:[1,3,4,5],pytorch:[1,3],q:4,quant:4,quantiti:[4,5],question:4,quot:[1,3,4],r:4,rai:4,rais:[4,5],raise_if_brok:5,random:4,randompolici:4,rang:4,rate:[1,3,4,5],rather:4,ratio:4,re:4,reach:4,real:[1,3,4],realist:[1,3,5],reason:4,rebal:5,rebalanc:[2,4],rebalancingrespons:5,receiv:4,recommend:[4,5],record:[4,5],reddit:4,reduc:5,refer:[4,5],refresh:[1,3],regardless:5,regist:4,reinforc:[1,3,4],rel:5,reliabl:[1,3],remain:5,replic:5,repr:4,repres:[4,5],represent:5,request:[4,5],requir:[1,3,4],reset:4,respect:[1,3],respons:5,rest:4,result:[4,5],retriev:[4,5],return_valu:4,reward:2,rewarddifferentialsharperatio:4,rewardlogreturn:4,rewardpnl:4,rewardsimplereturn:4,risk:4,rllib:[1,3],rollov:4,room:4,routin:4,row:4,run:[1,3,4],s:[4,5],same:4,sampl:[1,3],sample_episod:4,save:[4,5],schedul:4,scratch:4,screen:4,search:[1,4],second:4,secur:5,see:[4,5],seen:4,self:4,sell:[4,5],send:4,sent:4,sentiment:4,separ:5,sequenc:[4,5],seri:4,set:[1,3,4,5],sever:4,share:4,sharp:4,should:4,showcategori:4,side:5,side_effect:4,sign:4,signal:4,signatur:4,silent:4,simpl:[1,3,4],simpli:4,simplifi:4,simul:[1,3,4,5],sinc:5,singl:[4,5],situat:5,size:4,skip:5,sklearn:4,slide:4,sliding_window:4,slightli:4,slippag:[1,3,5],slit:5,slower:4,small:[4,5],smaller:5,smart:4,so:[4,5],softwar:[1,3],some:4,sort:5,sourc:[1,3,4,5],space:2,spec:4,spec_set:4,special:4,specif:4,specifi:4,specsheet:4,speed:4,sphinx:[1,3],spread:[1,3,4,5],spy:[4,5],stabl:[1,3],stackexchang:4,stackoverflow:4,standard:[1,3],start:4,state:[2,5],static_hash:4,step:4,still:4,stock:[1,3,4],stop:4,store:[4,5],str:[4,5],strategi:[1,3,4],stream:5,stricter:4,string:4,structur:4,stuff:4,subclass:4,subcontract:4,submodul:2,subpackag:2,subset:4,suit:[1,3],suitabl:4,support:[1,3],surpris:5,symbol:4,symbol_short:4,synchron:4,system:4,t:[4,5],take:4,target:[4,5],taylor:4,term:[4,5],termin:4,test:[1,3,4,5],test_end:4,test_siz:4,test_start:4,th:5,than:[4,5],thank:[1,3,4],thei:4,therefor:[1,3,5],thi:[1,3,4,5],through:4,thu:4,time:[1,3,4,5],timestamp:4,timestep:4,tini:5,to_excel:5,to_fram:[4,5],to_panda:4,too:[4,5],toolkit:[1,3],top:4,total:5,track:[4,5],track_record:[2,4],trackabl:5,trackrecord:[4,5],trackrecordcomparison:5,trade:[1,2,3,4],trading_vix_futures_opt:4,tradingacademi:4,tradingenv:[1,3],train:[1,3,4],train_end:4,train_siz:4,train_start:4,transact:[1,3,5],transaction_cost:5,transaction_pric:[4,5],transform:4,transmitt:2,trigger:[4,5],type:[1,3,4,5],u:4,uncombin:4,underli:4,unexpect:5,union:[4,5],uniqu:4,unit:[4,5],unless:[4,5],unsupport:4,until:4,up:[4,5],updat:[4,5],upfront:5,upon:[1,3],us:[1,3,4,5],usd:[4,5],user:4,utc:4,v3:4,v:4,valid:4,valu:[4,5],vari:4,variant:4,varieti:[1,3,5],veri:4,verifi:4,verify_overlap:4,verify_start_before_end:4,version:[1,3],viceversa:4,vix:4,volatil:4,vx:4,wa:[4,5],wai:4,walk_forward:4,want:4,we:[4,5],weight:[4,5],weights_actu:5,weights_target:5,were:5,what:[4,5],whatev:[4,5],when:[4,5],whenev:4,where:[4,5],which:[4,5],whose:4,window:4,within:[4,5],without:5,wlid:4,wonder:4,word:5,work:[1,3,4],world:[1,3],worri:4,would:[4,5],wrap:4,www:[4,5],x:[4,5],year:4,yield:[1,3],you:[1,3,4,5],your:4,z:4,zb:4,zero:[4,5],zf:4,zn:4,zq:4,zt:4},titles:["&lt;no title&gt;","Introduction","tradingenv","Introduction","tradingenv package","tradingenv.broker package"],titleterms:{alloc:5,broker:5,changelog:1,content:[4,5],contract:4,develop:[1,3],env:4,event:4,exchang:4,featur:4,fee:5,indic:1,instal:[1,3],introduct:[1,3],librari:4,metric:4,modul:[4,5],note:[1,3],packag:[1,4,5],polici:4,project:[1,3],rebalanc:5,relev:[1,3],reward:4,space:4,state:4,structur:1,submodul:[4,5],subpackag:4,tabl:1,track_record:5,trade:5,tradingenv:[2,4,5],transmitt:4}})