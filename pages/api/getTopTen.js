export default function handler(req, res) {
  const getData = async () => {
    const response = await fetch(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=27d65e93-d349-42b3-9c9a-749e859657f4',
      {
        method: 'GET',
        headers: {
          Accept: '*/*',
        },
      },
    )

    const data = await response.json()

    res.status(200).json({ data })
  }

  getData()
}
