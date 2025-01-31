＃訪問記錄

允許您基於以下參數配置每個角色對特定記錄或視圖的訪問權限：

  -**可用角色**：ADempiere中創建了所有角色，這些角色沒有定位的註冊表的任何配置
  -**配置的角色**：有些角色將具有對特定記錄的訪問或阻止的配置，這些訪問或
  鎖取決於以下選項：
    -阻止：選中此選項後，將阻止角色訪問和查看註冊表，啟用此選項將啟用以下選項：
         -從屬實體：選中此選項只會使一個記錄處於活動狀態，而依賴於該記錄的其他記錄會阻止它們
    -解鎖：選中此選項可啟用或激活記錄的可視化，啟用此選項後，將啟用以下選項：
      -只讀：您可以在讀取模式下查看（無法編輯或創建）與角色關聯的記錄
      -可編輯：您可以以讀寫模式查看（可以編輯或創建）
      
## ADempiere-ZK版本
   
<img :src="$withBase('/images/components/record-access/ZK_access-to-records.png')" alt="Acceso a Registro Versión de Escritorio ZK" width="800px">
     
## ADempiere-Vue版本

<img :src="$withBase('/images/components/record-access/AD-Vue-AccesoRegistros-Ventana.png')" alt="Acceso a Registro ADempiere-Vue de Escritorio" width="800px">

通過按記錄使用此配置，您可以自定義每個角色在ADempiere中的顯示和訪問，在角色位於“可用角色”部分時，可以在其中激活記錄的顯示，阻止或簡單地排除它。表示該記錄上沒有任何配置，如果要激活任何配置
(激活還是阻止），則必須將角色傳遞給“配置的角色”部分，並對該角色應用所需的選項在該特定記錄上。

應當指出，ADempiere中的此操作僅適用於每個記錄和每個角色的記錄；以下是“訪問註冊表”功能的一個實際案例：

需要訪問兩種類型的文檔，一種是讀和寫的，另一種是只讀的，並阻止另一種類型的文檔的視圖
  
  -要對文檔進行讀寫訪問：文檔類型必須位於ADempiere中，轉到“訪問註冊表”操作，找到角色，然後轉到“配置的角色”部分，選擇“取消阻止”選項，然後選擇“可編輯的“
  
  -要僅訪問文檔，請執行以下操作：文檔類型必須位於ADempiere中，轉到操作“訪問註冊表”，找到該角色，然後轉到“配置的角色”部分，選擇選項“取消阻止”和“僅”閱讀“
  -阻止文檔：ADempiere必須找到文檔的類型，轉到“訪問註冊表”操作，找到該角色，然後轉到“已配置角色”部分，然後選擇“阻止”選項
  
##它在哪裡？

該操作位於“操作”菜單中的那些窗口中

<img :src="$withBase('/images/components/record-access/AD-Vue_MA-Acceso_Registro.png')" alt="Acceso a Registro ADempiere-Vue Escritorio" width="800px">

##是做什麼用的？

它用於配置特定註冊表中角色的訪問和鎖定

##功能或觀察
-功能：配置角色以提供訪問權限或阻止記錄
-觀察：它僅適用於寄存器和角色，即，如果您要配置一個或多個寄存器，則它們必須一個接一個地執行
  
