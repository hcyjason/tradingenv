import pytest
from tradingenv.contracts import AbstractContract


@pytest.fixture(autouse=True)
def reset_global_attributes():
    now_before = AbstractContract.now
    AbstractContract.now = now_before  # before the test
    yield  # run the test
    AbstractContract.now = now_before  # after the test