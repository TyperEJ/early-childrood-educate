
// 檢查下一頁按鈕是否存在且可用
function canGoToNextPage() {
    const nextPageLink = $('#PageControl1_lbNextPage');
    return nextPageLink.length && !nextPageLink.hasClass('aspNetDisabled');
}

// 模擬點擊下一頁按鈕
function clickNextPage() {
    document.getElementById('PageControl1_lbNextPage').click();
}

const gardensInfo = [];

function collectData(){
    $('#GridView1 > tbody > tr').each(function() {
        const $row = $(this);
        const schoolName = $row.find('span[id^="GridView1_lblSchName_"]').text().trim();
        const city = $row.find('span[id^="GridView1_lblCity_"]').text().trim();
        const area = $row.find('span[id^="GridView1_lblArea_"]').text().trim();
        const type = $row.find('span[id^="GridView1_lblPub_"]').text().trim();
        const address = $row.find('a[id^="GridView1_hlAddr_"]').text().trim();

        gardensInfo.push({
            schoolName,
            city,
            area,
            type,
            address
        });
    });
}

// 主程式
(async function main() {
    while (canGoToNextPage()) {
        // 在這裡執行您要處理當前頁面的程式碼
        collectData();

        // 等待一段時間,讓頁面載入完成
        await new Promise(resolve => setTimeout(resolve, 1000));

        // 模擬點擊下一頁按鈕
        clickNextPage();
    }

    // 處理最後一頁的資料
    collectData();

    // 在這裡執行您要處理最後一頁的程式碼
    // 輸出
    console.log(JSON.stringify(gardensInfo, null, 2));
})();
